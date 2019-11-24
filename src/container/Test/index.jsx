import React, { Component } from "react";
import { List, InputItem, Toast, Button, Modal } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.less";
import Condition from "./Condition/index.jsx";
import {
  blessFun,
  supFun,
  indexDataC,
  indexDataD,
  indexDataE,
  indexDataF,
  indexDataG,
  indexDataH,
  getToken,
  setToken,
  indexDataI,
  indexDataJ
} from "./fun/index.js";
const tabs = [
  { title: "权溢无度", key: "9" },
  { title: "阴包", key: "10" },
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
      active: "9",
      isShowModal: false,
      int: 0,
      name: "",
      blessData: [], //祈福宝箱
      supData: [], //祈愿宝箱
      indexData3: [], //花语娇颜
      indexData4: [], //木槿海棠
      indexData5: [],
      indexData6: [],
      indexData7: [],
      indexData8: [],
      indexData9: [],
      indexData10: [],
      bessArr: {}
    };
  }

  componentDidMount() {
    const blessData = blessFun();
    const supData = supFun();
    const indexData3 = indexDataC();
    const indexData4 = indexDataD();
    const indexData5 = indexDataE();
    const indexData6 = indexDataF();
    const indexData7 = indexDataG();
    const indexData8 = indexDataH();
    const indexData9 = indexDataI();
    const indexData10 = indexDataJ();

    this.setState({
      blessData,
      supData,
      indexData3,
      indexData4,
      indexData5,
      indexData6,
      indexData7,
      indexData8,
      indexData9,
      indexData10
    });
  }

  handleSure(e) {
    const {
      blessData,
      active,
      supData,
      indexData3,
      indexData4,
      indexData5,
      indexData6,
      indexData7,
      indexData8,
      indexData9,
      indexData10
    } = this.state;
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
        : active === "5"
        ? 200
        : active === "6"
        ? 200
        : active === "7"
        ? 200
        : active === "8"
        ? 200
        : active === "9"
        ? 500
        : active === "10"
        ? 700
        : 0) * int;

    tabs.map(it => {
      if (it.key === active) name = it.title;
    });

    const treasureArr = [];
    for (let i = 0; i < int; i++) {
      if (
        active === "1" ||
        active === "2" ||
        active === "9" ||
        active === "10"
      ) {
        const _random = randomNumber(0, 9999);
        if (active === "1") treasureArr.push(blessData[_random]);
        if (active === "2") treasureArr.push(supData[_random]);
        if (active === "9") treasureArr.push(indexData9[_random]);
        if (active === "10") treasureArr.push(indexData10[_random]);
      } else {
        const _random = randomNumber(0, 99);
        if (active === "3") treasureArr.push(indexData3[_random]);
        if (active === "4") treasureArr.push(indexData4[_random]);
        if (active === "5") treasureArr.push(indexData5[_random]);
        if (active === "6") treasureArr.push(indexData6[_random]);
        if (active === "7") treasureArr.push(indexData7[_random]);
        if (active === "8") treasureArr.push(indexData8[_random]);
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
                    {name === "权溢无度" || name === "阴包" ? "礼包" : "宝箱"}
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
