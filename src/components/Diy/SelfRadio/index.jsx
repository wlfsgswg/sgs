import React, { Component } from "react";
import { Radio, List } from "antd-mobile";
import "./index.less";
const RadioItem = Radio.RadioItem;

class SelfRadio extends Component {
  constructor(props) {
    super(props);
  }

  // 体力改变函数
  handlePhysical(e) {
    this.props.onChangePhy(e);
  }
  // 势力改变函数
  handleCountry(e) {
    this.props.onChangeCou(e);
  }

  render() {
    const { physical, country } = this.props;
    return (
      <div className="sgs-diy-selfradio">
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "选择武将体力（4体力模板暂不开放）"}>
              <RadioItem
                key={3}
                checked={physical === 3}
                onChange={() => this.handlePhysical(3)}
              >
                3体力（阴阳鱼）
              </RadioItem>
              <RadioItem
                key={4}
                checked={physical === 4}
                onChange={() => this.handlePhysical(4)}
              >
                4体力（阴阳鱼）
              </RadioItem>
            </List>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}
          className="list2"
        >
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "选择武将势力"}>
              <RadioItem
                key={1}
                checked={country === 1}
                onChange={() => this.handleCountry(1)}
              >
                魏
              </RadioItem>
              <RadioItem
                key={2}
                checked={country === 2}
                onChange={() => this.handleCountry(2)}
              >
                蜀
              </RadioItem>
              <RadioItem
                key={3}
                checked={country === 3}
                onChange={() => this.handleCountry(3)}
              >
                吴
              </RadioItem>
              <RadioItem
                key={4}
                checked={country === 4}
                onChange={() => this.handleCountry(4)}
              >
                群
              </RadioItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SelfRadio;
