import React, { Component } from "react";
import { List, InputItem, Toast, Button, Modal } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.less";
import Condition from "./Condition/index.jsx";
import { blessFun, getToken, setToken } from "./fun/index.js";
import { indexData1231 } from "./../pr/data1231/index.js";
import {
  indexData1,
  indexData2,
  indexData3,
  indexData4
} from "./../pr/data1212/index.js";
const tabs = [
  { title: "陆抗", key: "11" },
  { title: "灵雎", key: "12" },
  { title: "程昱", key: "13" },
  { title: "唐咨", key: "18" },
  { title: "黄权", key: "17" },
  { title: "周妃", key: "19" },
  { title: "苏飞", key: "14" },
  { title: "张绣", key: "16" },
  { title: "祈福", key: "1" }
];
// 根据key return title
const fromKey = e => {
  let title;
  tabs.map(item => {
    if (item.key == e) title = item.title;
  });
  return title;
};
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
      active: "11",
      isShowModal: false,
      int: 0,
      name: "",
      blessData: [], //祈福宝箱
      indexData31: [],
      indexData_1: [],
      indexData_2: [],
      indexData_3: [],
      indexData_4: [],
      bessArr: {}
    };
  }

  componentDidMount() {
    const blessData = blessFun();
    const indexData31 = indexData1231();
    const indexData_1 = indexData1();
    const indexData_2 = indexData2();
    const indexData_3 = indexData3();
    const indexData_4 = indexData4();
    console.log(indexData_1, indexData_2, indexData_3, indexData_4);
    this.setState({
      blessData,
      indexData31,
      indexData_1,
      indexData_2,
      indexData_3,
      indexData_4
    });
  }

  handleSure(e) {
    const { blessData, active, indexData31 } = this.state;
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
        : active === "11"
        ? 399
        : active === "12"
        ? 798
        : active === "13"
        ? 748
        : active === "14"
        ? 399
        : active === "15"
        ? 399
        : active === "16"
        ? 399
        : active === "17"
        ? 299
        : active === "18"
        ? 299
        : active === "19"
        ? 399
        : 0) * int;

    tabs.map(it => {
      if (it.key === active) name = it.title;
    });

    const treasureArr = [];
    for (let i = 0; i < int; i++) {
      const _random = randomNumber(0, 9999);
      // const _random2 = randomNumber(0, 99999);
      if (active === "1") {
        treasureArr.push(blessData[_random]);
      } else {
        treasureArr.push(indexData31[_random]);
      }
    }
    // 对treasureArr 数据进行处理，相同项合并
    // 祈福十次额外必得至少一个同心结
    if (active === "1" && int === 10) {
      // 首次模拟出一定额度同心结
      const firstTxj = randomNumber(0, 9);
      const endTxj = firstTxj < 5 ? firstTxj : randomNumber(0, 9);
      for (let k = 0; k < endTxj; k++) {
        treasureArr.push("同心结");
      }
    }
    // 如果tab 11-19则分别加入特定武将名称
    if (Number(active) > 10 && Number(active) < 20) {
      for (let y = 0; y < treasureArr.length; y++) {
        if (treasureArr[y] === "稀有武将") treasureArr[y] = fromKey(active);
        if (treasureArr[y] === "经典武将秀")
          treasureArr[y] = `${fromKey(active)}武将秀`;
      }
    }
    // 数一下
    const count = getWordCnt(treasureArr);
    const list = [];
    for (let index in count) {
      list.push({ name: index, t: Number(count[index]) });
    }
    // 整理数组从小到大排列
    list.sort((a, b) => a.t - b.t);
    this.setState({ int, name });
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
      this.setState({ bessArr, isShowModal: true });
    }, 300);
  }

  render() {
    const { getFieldProps } = this.props.form;
    const { active, bessArr, isShowModal, int, name } = this.state;
    return (
      <div className="sgs-test">
        <div className="sgs-test-content">
          <Condition
            tabs={tabs}
            active={active}
            onChange={e => this.setState({ active: e })}
          />
          <div className="content">
            {
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
            }
            <Modal
              visible={isShowModal}
              transparent
              maskClosable={true}
              onClose={() => this.setState({ isShowModal: false })}
              title={
                <div>
                  <div>
                    {name}
                    {name === "祈福" || name === "祈愿" ? "宝箱" : "礼包"}
                    {int === 5 ? "五连抽" : int === 10 ? "十连抽" : `${int}抽`}
                    收获
                  </div>
                  <div
                    style={{
                      color: "#999",
                      lineHeight: "20px",
                      fontSize: "12px",
                      paddingTop: "10px"
                    }}
                  >
                    <div>关闭弹窗后你可以去记录查看</div>
                    <div> 您以往模拟结果</div>
                  </div>
                </div>
              }
              className="modal"
              animationType="fade"
              footer={[
                {
                  text: "关闭",
                  onPress: () => {
                    this.setState({ isShowModal: false });
                  }
                }
              ]}
            >
              {/* 根据数组判断 */}
              <div
                className="content-bottom"
                style={{
                  maxHeight: 300,
                  overflow: "scroll",
                  paddingTop: "5px"
                }}
              >
                {bessArr.time &&
                  bessArr.list.length !== 0 &&
                  bessArr.list.map((it, j) => {
                    return (
                      <div
                        key={j}
                        className="bot-item"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 20px 10px"
                        }}
                      >
                        <div className="bot-item-left">{it.name}</div>
                        <div
                          className="bot-item-right"
                          style={{ color: "red", opacity: "0.5" }}
                        >
                          x {it.t}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
const H5NumberInputExampleWrapper = createForm()(Test);

export default H5NumberInputExampleWrapper;
