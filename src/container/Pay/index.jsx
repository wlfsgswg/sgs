import React, { Component } from "react";
import "./index.less";
import { getToken, formatMoney } from "./../Test/fun/index.js";
import pay from "./pay.png";
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: [],
      total: 0
    };
  }

  componentDidMount() {
    const json = JSON.parse(getToken()) ? JSON.parse(getToken()) : [];
    let tal = 0;
    if (json.length) {
      json.map(it => {
        tal = tal + it.pay;
      });
    }
    this.setState({ json, total: tal });
  }

  render() {
    const { json, total } = this.state;
    return (
      <div className="sgs-pay">
        <div className="sgs-pay-content">
          {json.length === 0 ? (
            <div className="my-img">
              <img src={pay} alt="" />
              <div className="title">暂无花费，先去模拟试试</div>
            </div>
          ) : (
            <div>
              <div className="record-bottom">
                <div className="l-left">
                  等值人民币
                  <span style={{ color: "#00a4fa", fontSize: "18px" }}>
                    {formatMoney(total / 100)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Record;
