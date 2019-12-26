import Wei_3 from "./../image/img-bgc/wei_3.png";
import Wei_4 from "./../image/img-bgc/wei_4.png";
import Wei_j from "./../image/img-bgc/wei_j.png";
import Shu_3 from "./../image/img-bgc/shu_3.png";
import Shu_4 from "./../image/img-bgc/shu_4.png";
import Shu_j from "./../image/img-bgc/shu_j.png";
import Wu_3 from "./../image/img-bgc/wu_3.png";
import Wu_4 from "./../image/img-bgc/wu_4.png";
import Wu_j from "./../image/img-bgc/wu_j.png";
import Qun_3 from "./../image/img-bgc/qun_3.png";
import Qun_4 from "./../image/img-bgc/qun_4.png";
import Qun_j from "./../image/img-bgc/qun_j.png";

// const Wei_3 = "http://q32gn9qfe.bkt.clouddn.com/wei_3.png";
// const Wei_4 = "http://q32gn9qfe.bkt.clouddn.com/wei_4.png";
// const Wei_j = "http://q32gn9qfe.bkt.clouddn.com/wei_j.png";
// const Shu_3 = "http://q32gn9qfe.bkt.clouddn.com/shu_3.png";
// const Shu_4 = "http://q32gn9qfe.bkt.clouddn.com/shu_4.png";
// const Shu_j = "http://q32gn9qfe.bkt.clouddn.com/shu_j.png";
// const Wu_3 = "http://q32gn9qfe.bkt.clouddn.com/wu_3.png";
// const Wu_4 = "http://q32gn9qfe.bkt.clouddn.com/wu_4.png";
// const Wu_j = "http://q32gn9qfe.bkt.clouddn.com/wu_j.png";
// const Qun_3 = "http://q32gn9qfe.bkt.clouddn.com/qun_3.png";
// const Qun_4 = "http://q32gn9qfe.bkt.clouddn.com/qun_4.png";
// const Qun_j = "http://q32gn9qfe.bkt.clouddn.com/qun_j.png";

const country3 = [Wei_3, Shu_3, Wu_3, Qun_3];
const country4 = [Wei_4, Shu_4, Wu_4, Qun_4];
const countryJ = [Wei_j, Shu_j, Wu_j, Qun_j];
/**
 * @desc 该函数主要是通过所传武将国家和体力的参数，找到需要用到的背景模版
 * @param {*} country  number 武将的国家 1，魏国 2，蜀国 3，吴国 4，群雄 5，神 默认1
 * @param {*} physical  number 武将的体力 默认 3
 * @return string
 */

export const getImgCounty = (country = 1, physical = 3) => {
  const arr = physical === 3 ? country3 : country4;
  return arr[country - 1];
};

/**
 * @desc 该函数主要是通过所传武将国家和体力的参数，找到需要用到的背景模版
 * @param {*} country  number 武将的国家 1，魏国 2，蜀国 3，吴国 4，群雄 5，神 默认1
 * @param {*} physical  number 武将的体力 默认 3
 * @return string
 */

export const getImgJ = (country = 1) => {
  return countryJ[country - 1];
};
/**
 *
 * @param {*} str
 * @param {*} n
 */

export const stringToArr = (str = "", n = 12) => {
  const strArr = [];
  for (let i = 0, l = str.length; i < l / n; i++) {
    const a = str.slice(n * i, n * (i + 1));
    strArr.push(a);
  }
  return strArr;
};

/**
 *
 * @param {*} context
 */

// 获取canvas像素比
export const getPixelRatio = context => {
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};
