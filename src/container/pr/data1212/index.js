import { indexData_1 } from "./index1.js";
import { indexData_2 } from "./index2.js";
import { indexData_3 } from "./index3.js";
import { indexData_4 } from "./index4.js";
/**
 * @desc 获取11周年礼袋数组
 * @length 数组长度100
 * @return Array
 */

export const indexData1 = () => {
  let Data1 = [];
  indexData_1.map(it => {
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
 * @desc 获取暖冬宝箱数组
 * @length 数组长度10000
 * @return Array
 */

export const indexData2 = () => {
  let Data1 = [];
  indexData_2.map(it => {
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
 * @desc 获取红缨彩云宝箱数组
 * @length 数组长度100
 * @return Array
 */

export const indexData3 = () => {
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
 * @desc 获取红文和宝箱数组
 * @length 数组长度100000
 * @return Array
 */

export const indexData4 = () => {
  let Data1 = [];
  indexData_4.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr * 1000;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};
