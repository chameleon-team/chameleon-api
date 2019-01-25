import { cpx2px } from '../_util';
import { isNum } from '../../../lib/utils';
import { rotateStyles, isNumTypeStyles } from './common.js';

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

    if (rotateStyles.includes(key) && typeof value === 'number') {
      value = `${value}deg`;
    }
    if (key === 'rotate') {
      returnStyles.rotateZ = value;
    } else {
      returnStyles[key] = value;
    }

  });
  return returnStyles;
};

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
