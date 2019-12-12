import { indexData_1 } from "./index1.js";
/**
 * @desc 获取祈福数组
 * @length 数组长度10000
 * @return Array
 */

export const indexDataBless = () => {
  let Data1 = [];
  indexData_1.map(it => {
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
