#!/bin/bash
set -e

<<COMMENT
    发布前注意先在package.json中更新好版本号，这里不做自动更新
COMMENT

# 根目录临时目录名，用完删掉
NPM_PUBLISH_DIR='.npm_publish'
NPM_PUBLISH_DIR_SRC='src/api/.'

if [ -e ./${NPM_PUBLISH_DIR} ]; then
rm -rf ${NPM_PUBLISH_DIR}
echo "临时文件夹存在，已删除"
fi

# 创建临时文件夹
mkdir ${NPM_PUBLISH_DIR}

# 拷贝到根目录临时目录处
cp package.json ${NPM_PUBLISH_DIR}
cp -rf ${NPM_PUBLISH_DIR_SRC} ${NPM_PUBLISH_DIR}
cd ${NPM_PUBLISH_DIR}

# 发布
# npm version patch
read -p "你确定要发布到npm吗，package.json版本号更新了吗[Y/y]?" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
npm publish
echo "\033[36m发布完毕\033[0m" 
else
echo "你取消了发布"
fi

# 用完删掉临时目录
cd ../
rm -rf ${NPM_PUBLISH_DIR}