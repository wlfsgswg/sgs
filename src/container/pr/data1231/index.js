import { data } from "./pr.js";
/**
 * @desc 获取礼包数组
 * @length 数组长度10000
 * @return Array
 */

export const indexData1231 = () => {
  let Data1 = [];
  data.map(it => {
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
