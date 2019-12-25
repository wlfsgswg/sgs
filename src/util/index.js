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
