import Index from './index.interface';

export const stylePipe = (styles, descriptions, quene, ...args) => {
  let current = styles;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, descriptions, ...args]);
  });
  return current;
}

export const descriptionPipe = (descriptions, styles, quene, ...args) => {
  let current = descriptions;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, styles, ...args]);
  });
  return current;
}

export const cpx2px = (v) => +(Index.getViewportWidth() / 750 * v).toFixed(3)

export const getRotateZ = (a, b, c, d, e, f) => {
  var aa = Math.round(180 * Math.asin(a) / Math.PI);
  var bb = Math.round(180 * Math.acos(b) / Math.PI);
  var cc = Math.round(180 * Math.asin(c) / Math.PI);
  var dd = Math.round(180 * Math.acos(d) / Math.PI);
  var deg = 0;
  if (aa == bb || -aa == bb) {
    deg = dd;
  } else if (-aa + bb == 180) {
    deg = 180 + cc;
  } else if (aa + bb == 180) {
    deg = 360 - cc || 360 - dd;
  }
  return deg >= 360 ? 0 : deg;
  // return (aa+','+bb+','+cc+','+dd);
}

// 获取元素的transform信息
export const getTransform = (ele) => {
  var st = window.getComputedStyle(ele, null);

  var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
  if (tr === 'none') {return}
  var values = tr.split('(')[1].split(')')[0].split(',');
  const [a, b, c, d, e, f] = values
  // var scale = Math.sqrt(a * a + b * b);
  // arc sin, convert from radians to degrees, round
  // var sin = b / scale;

  const rotateZ = getRotateZ(a, b, c, d, e, f)
  return {
    translateX: Number(e.trim()),
    translateY: Number(f.trim()),
    scaleX: Number(a.trim()),
    scaleY: Number(d.trim()),
    rotateZ
  }
  // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
  // var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
}

export default {};
