import ui from './index.interface';
const defaultIconUrl = require("./components/c-dialog/images/warn.png?__inline")
export default function alert(opt) {
  let { message = '', confirmTitle = '确定', iconUrl = defaultIconUrl} = opt;
  return new Promise((resolve, reject) => {
    ui.alert({ message, confirmTitle, iconUrl }, () => {
      resolve();
    }, () => {
      reject();
    });
  });
}
