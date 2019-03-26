import { cpx2px } from '../_util';
import { isNum } from '../../../lib/utils';
import { isNumTypeStyles } from './common.js';
import { getTransform } from '../_util';

export const transformLoader = (styles, descriptions) => {
  const returnStyles = {};
  Object.keys(styles).forEach((key) => {
    let value = styles[key];
    // 目前不支持转换，所以loader来做
    if (isNumTypeStyles.includes(key)) {
      if (isNum(value)) {
        value = cpx2px(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    // if (rotateStyles.includes(key) && typeof value === 'number') {
    //   value = `${value}deg`;
    // }
    if (key === 'rotate') {
      returnStyles.rotateZ = value;
    } else {
      returnStyles[key] = value;
    }
  });
  return returnStyles;
};

// 解决动画链接不上问题http://velocityjs.org/#forcefeeding
export const completionLoader = (styles, descriptions, elm) => {
  const returnStyles = styles;
  const transformInfo = getTransform(elm);
  if (transformInfo) {
    returnStyles.translateX = [styles.translateX || transformInfo.translateX, transformInfo.translateX]
    returnStyles.translateY = [styles.translateY || transformInfo.translateY, transformInfo.translateY]
    returnStyles.scaleX = [styles.scaleX || transformInfo.scaleX, transformInfo.scaleX]
    returnStyles.scaleY = [styles.scaleY || transformInfo.scaleY, transformInfo.scaleY]
    returnStyles.rotateZ = [styles.rotateZ || transformInfo.rotateZ, transformInfo.rotateZ]
  }

  return returnStyles
}

export const originLoader = (styles, descriptions) => {
  let returnStyles = styles;
  const transformOrigin = descriptions.transformOrigin;
  delete descriptions.transformOrigin;

  if (transformOrigin) {
    const originArr = transformOrigin.split(' ');
    returnStyles.transformOriginX = originArr[0];
    returnStyles.transformOriginY = originArr[0];
  }

  return returnStyles;
};
