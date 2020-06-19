import ui from './index.interface';
const defaultIconUrl = require("../alert/components/c-dialog/images/warn.png?__inline")

export default function confirm(opt) {
  let { message = '', confirmTitle = '确定', cancelTitle = '取消', iconUrl = defaultIconUrl } = opt;
  return new Promise((resolve, reject) => {
    ui.confirm({ message, confirmTitle, cancelTitle, iconUrl }, value => {
      resolve(value);
    }, () => {
      reject();
    });
  });
}
