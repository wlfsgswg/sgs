import React, { Component } from "react";
import { List, InputItem, Toast, Button } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.less";
import Condition from "./Condition/index.jsx";
import {
  blessFun,
  supFun,
  indexDataC,
  indexDataD,
  getToken,
  setToken
} from "./fun/index.js";
const tabs = [
  { title: "祈福", key: "1" },
  { title: "祈愿", key: "2" },
  { title: "花语娇颜", key: "3" },
  { title: "木槿海棠", key: "4" },
  { title: "鸢尾木兰", key: "5" },
  { title: "茉莉玉兰", key: "6" },
  { title: "睡莲丹桂", key: "7" },
  { title: "芍药昙花", key: "8" }
];

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}
// 随机数函数
const randomNumber = (m, n) => {
  return Math.floor(Math.random() * (m - n) + n);
};
// 计算数组中某值出现的次数
const getWordCnt = arr => {
  var obj = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    obj[item] = obj[item] + 1 || 1;
  }
  return obj;
};

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "1",
      blessData: [], //祈福宝箱
      supData: [], //祈愿宝箱
      indexData3: [], //花语娇颜
      indexData4: [], //木槿海棠
      bessArr: {}
    };
  }

  componentDidMount() {
    const blessData = blessFun();
    const supData = supFun();
    const indexData3 = indexDataC();
    const indexData4 = indexDataD();
    this.setState({ blessData, supData, indexData3, indexData4 });
  }

  handleSure(e) {
    const { blessData, active, supData, indexData3, indexData4 } = this.state;
    Toast.loading("处理中请耐心等待", 0.3);
    // 开宝箱次数
    const int = Number(e);
    // 获取时间
    const time = Date.parse(new Date());
    // 获取开何种箱子
    let name;
    // 开何种箱子分别需要多少花费
    let pay =
      (active === "1"
        ? 1000
        : active === "2"
        ? 1000
        : active === "3"
        ? 600
        : active === "4"
        ? 200
        : 0) * int;

    tabs.map(it => {
      if (it.key === active) name = it.title;
    });

    const treasureArr = [];
    for (let i = 0; i < int; i++) {
      if (active === "1" || active === "2") {
        const _random = randomNumber(0, 9999);
        if (active === "1") treasureArr.push(blessData[_random]);
        if (active === "2") treasureArr.push(supData[_random]);
      } else {
        const _random = randomNumber(0, 99);
        if (active === "3") treasureArr.push(indexData3[_random]);
        if (active === "4") treasureArr.push(indexData4[_random]);
      }
    }
    // 对treasureArr 数据进行处理，相同项合并
    const count = getWordCnt(treasureArr);
    const list = [];
    for (let index in count) {
      list.push({ name: index, t: Number(count[index]) });
    }
    // 整理数组从小到大排列
    list.sort((a, b) => a.t - b.t);
    // 返回
    const bessArr = {
      time: time,
      list: list,
      name: name,
      pay: pay,
      int: int
    };
    // 此处获取local然后把该项加入local Json
    const localJson = JSON.parse(getToken()) ? JSON.parse(getToken()) : [];
    localJson.unshift(bessArr);
    setToken(JSON.stringify(localJson));
    //已经存入

    setTimeout(() => {
      this.setState({ bessArr });
    }, 300);
  }

  render() {
    const { getFieldProps } = this.props.form;
    const { active, bessArr } = this.state;
    return (
      <div className="sgs-test">
        <div className="sgs-test-content">
          <Condition
            tabs={tabs}
            active={active}
            onChange={e => this.setState({ active: e })}
          />
          <div className="content">
            {active === "1" ||
            active === "2" ||
            active === "3" ||
            active === "4" ? (
              <div>
                <div className="btn-b-10">
                  <Button onClick={() => this.handleSure(1)}>开一次试试</Button>
                </div>
                <div className="btn-b-10">
                  <Button onClick={() => this.handleSure(5)}>五连抽</Button>
                </div>
                <div className="btn-b-10">
                  <Button onClick={() => this.handleSure(10)}>十连抽</Button>
                </div>
                <List>
                  <InputItem
                    {...getFieldProps("money2", {
                      normalize: (v, prev) => {
                        if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                          if (v === ".") {
                            return "0.";
                          }
                          return prev;
                        }
                        return v;
                      }
                    })}
                    type={"money"}
                    placeholder="请输入开箱次数"
                    ref={el => (this.inputRef = el)}
                    onVirtualKeyboardConfirm={v => {
                      // 先清除以前数据
                      this.setState({ bessArr: [] }, () => this.handleSure(v));
                    }}
                    clear={false}
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    disabledKeys={["."]}
                  >
                    自定义开箱
                  </InputItem>
                </List>
              </div>
            ) : (
              <div className="content-item">尚在开发中，请耐心等待...</div>
            )}
            {/* 根据数组判断 */}
            <div className="content-bottom">
              {bessArr.time &&
                bessArr.list.length !== 0 &&
                bessArr.list.map((it, j) => {
                  return (
                    <div key={j} className="bot-item">
                      <div className="bot-item-left">{it.name}</div>
                      <div className="bot-item-right">x {it.t}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const H5NumberInputExampleWrapper = createForm()(Test);

export default H5NumberInputExampleWrapper;
