var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var PL = require('./pipeline');

var types = ['web', 'wx', 'weex'];
var type = process.argv[2];
if (!type || !types.includes(type)) {
  console.error('What type of file do you want to make?[weex/web/wx]');
  return;
}

var rootPath = process.cwd();
var apiPath = path.resolve(rootPath, 'src/api');
var testApiPath = path.resolve(rootPath, 'test/.api/' + type);
var testApiInterfacePath = path.resolve(rootPath, 'test/.api/' + type + '/src/interfaces');
// 无用单元测试目录
var unusualDirectoryStr = 'login|initLog|sendLog|showToast|alert|confirm|initSocket|createAnimation'
// 拷贝文件，处理文件
try {
  fse.copySync(apiPath, testApiPath);
  var apiIndexContent = fs.readFileSync(testApiPath + '/index.js').toString();
  apiIndexContent = apiIndexContent.replace(new RegExp(`import.+(${unusualDirectoryStr}).+\n`, "g"), '');
  apiIndexContent = apiIndexContent.replace(new RegExp(`(${unusualDirectoryStr}).+\n`, 'g'), '');
  fs.writeFileSync(testApiPath + '/index.js', apiIndexContent);
  unusualDirectoryStr.split('|').forEach(function (dirName) {
    fse.removeSync(testApiInterfacePath + '/' + dirName);
  })
  PLMake(testApiInterfacePath + '/**/*.{js,interface}');
} catch (err) {
  console.error(err)
}

// 流水线处理
function PLMake(globMatch) {
  var hooks = {
    afterPipe: function (pipeInfo) {
      var filepath = pipeInfo.path;
      // 每次单文件处理后改名 .interface => .interface.js
      if (filepath.match(/\.interface$/)) {
        var newPath = filepath.replace(/.interface$/, '.interface.js');
        fs.renameSync(filepath, newPath, function (err, data) {
          if (err) {
            console.log(err);
          }
        });
      }
    }
  }

  // 流水线针对单文件要做的处理
  PL.match(globMatch).hooks(hooks).pipe([
    makeInterfaceFile,
    replaceRequireFileExt,
    replaceLibToMock
  ]);
}

// 处理interface文件，只保留对应type的js内容，移除接口
function makeInterfaceFile(pipeInfo) {
  var path = pipeInfo.path;
  var source = pipeInfo.source;
  if (path.match(/\.interface$/)) {
    var regReplaceTag = new RegExp('<script\\s+cml-type="' + type + '"\\s*>([\\s\\S]*?)<\/script>');
    source.replace(regReplaceTag, function ($1, $2, $3) {
      $2 = $2.replace(/implements(\s+\w+\s*?)(?={)/g, '');
      source = $2;
    });
  }
  return source;
}

// 处理引入文件后缀
function replaceRequireFileExt(pipeInfo) {
  var source = pipeInfo.source;
  source = source.replace(/\.interface(['"])/g, function ($1, $2) {
    return '.interface.js' + $2;
  });
  return source;
}

// 处理引入lib库到mock的lib库
function replaceLibToMock(pipeInfo) {
  var source = pipeInfo.source;
  source = source.replace(/\.\.\/\.\.\/lib/g, '../../../../../vm/lib');
  return source;
}