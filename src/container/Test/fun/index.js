import { blessData } from "./../../pr/blessing.js";
import { supData } from "./../../pr/supplication.js";
import { indexData_3 } from "./../../pr/index3.js";
import { indexData_4 } from "./../../pr/index4.js";
import { indexData_5 } from "./../../pr/index5.js";
import { indexData_6 } from "./../../pr/index6.js";
import { indexData_7 } from "./../../pr/index7.js";
import { indexData_8 } from "./../../pr/index8.js";

import { indexData_9 } from "./../../pr/data1128/index1.js";
import { indexData_10 } from "./../../pr/data1128/index2.js";
/**
 * @desc 获取权溢无度数组
 * @length 数组长度10000
 * @return Array
 */

export const indexDataI = () => {
  let Data1 = [];
  indexData_9.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr * 100;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

/**
 * @desc 获取阴包数组
 * @length 数组长度10000
 * @return Array
 */

export const indexDataJ = () => {
  let Data1 = [];
  indexData_10.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr * 100;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};

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
 * @desc 获取鸢尾木兰数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataE = () => {
  let Data1 = [];
  indexData_5.map(it => {
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
 * @desc 获取茉莉玉兰数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataF = () => {
  let Data1 = [];
  indexData_6.map(it => {
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
 * @desc 获取睡莲丹桂数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataG = () => {
  let Data1 = [];
  indexData_7.map(it => {
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
 * @desc 获取芍药昙花数组
 * @length 数组长度100
 * @return Array
 */

export const indexDataH = () => {
  let Data1 = [];
  indexData_8.map(it => {
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
