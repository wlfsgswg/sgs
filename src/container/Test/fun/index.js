import { blessData } from "./../../pr/blessing.js";
import { supData } from "./../../pr/supplication.js";
import { indexData_3 } from "./../../pr/index3.js";
import { indexData_4 } from "./../../pr/index4.js";
/**
 * @desc 获取祈福数组
 * @length 数组长度10000
 * @return Array
 */

export const blessFun = () => {
  let Data1 = [];
  blessData.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr * 10000;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

/**
 * @desc 获取祈愿数组
 * @length 数组长度10000
 * @return Array
 */

export const supFun = () => {
  let Data1 = [];
  supData.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr * 10000;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

/**
 * @desc 获取花语娇颜数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataC = () => {
  let Data1 = [];
  indexData_3.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

/**
 * @desc 获取木槿海棠数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataD = () => {
  let Data1 = [];
  indexData_4.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

/**
 * 获取localStorage中的token
 *
 * @return {string} token 值
 */
export const getToken = () => {
  return localStorage.getItem("json");
};

/**
 * 设置token 存储在localStorage中
 * @param {*} token token
 */
export const setToken = e => {
  localStorage.setItem("json", e);
};

/**
 * 移除localStorage中的token
 */
export const removeToken = () => {
  localStorage.removeItem("json");
};

/**
 * 格式化金额
 * @param {number | string} value 金额值 （单位分）
 * @param {boolean} isCurrency 是否带前缀 默认true
 *
 * @return {number | string} 返回格式化后的金额
 */
export const getPrice = (value, isCurrency = true) => {
  if (isCurrency) return `${"¥"}${(parseInt(value) / 100).toFixed(2)}`;
  return parseInt(value) / 100;
};

/**
 * 数字格式化并每三位加逗号
 *
 * @param {number} num 数字
 * @param {string} commas 分割符 默认','
 *
 * @return {string} 格式化后的数据
 */
export const formatMoney = (num, isCurrency = true) => {
  //   num = getPrice(num, false)
  if (isCurrency) {
    return "¥" + num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
  }
  return num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
};
