import React, { Component } from "react";
import "./index.less";
import { Modal } from "antd-mobile";
import { getToken, formatMoney, removeToken } from "./../Test/fun/index.js";
import noRecord from "./no_record.png";
import delect from "./delete.png";
import moment from "moment";
const alert = Modal.alert;
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: "",
      total: 0
    };
  }

  componentDidMount() {
    const json = JSON.parse(getToken()) ? JSON.parse(getToken()) : [];
    let tal = 0;
    if (json.length) {
      json.map(it => {
        it.time = moment(it.time).format("YYYY/MM/DD HH:mm:ss");
        tal = tal + it.pay;
      });
    }
    this.setState({ json: JSON.stringify(json), total: tal });
  }

  render() {
    let { json, total } = this.state;
    const jsons = json ? JSON.parse(json) : [];
    return (
      <div className="sgs-record">
        <div className="sgs-record-content">
          {jsons.length === 0 ? (
            <div className="my-img">
              <img src={noRecord} alt="" />
              <div className="title">暂无记录，先去模拟试试</div>
            </div>
          ) : (
            <div>
              <div className="record-bottom">
                <div className="l-left">
                  共消耗元宝{" "}
                  <span style={{ color: "#00a4fa", fontSize: "18px" }}>
                    {formatMoney(total, false)}
                  </span>
                </div>
              </div>
              <div className="record-bottom" style={{ marginBottom: "20px" }}>
                <div className="l-left">
                  等值人民币
                  <span style={{ color: "#00a4fa", fontSize: "18px" }}>
                    {" "}
                    {formatMoney(total / 100)}
                  </span>
                </div>
              </div>

              <div className="flxed">
                <div
                  className="icon"
                  onClick={() =>
                    alert("删除", "您确定删除开箱记录吗???", [
                      { text: "取消", onPress: () => {} },
                      {
                        text: "确定",
                        onPress: () => {
                          this.setState({ json: "" }, () => removeToken());
                        }
                      }
                    ])
                  }
                >
                  <img src={delect} alt="" />
                </div>
              </div>
              {jsons.map((it, i) => {
                return (
                  <div key={i} className="content-item">
                    <div className="top">
                      <div className="l-left">
                        <div>{it.time}</div>
                        <div>{it.int}开箱</div>
                      </div>
                      <div className="r-right">
                        <div>{it.pay}元宝</div>
                        <div>{it.pay / 100}RMB</div>
                      </div>
                    </div>
                    <div className="bottom">
                      （{it.name}
                      {"礼包"}）
                    </div>
                    <div className="content">
                      {it.list.length !== 0 &&
                        it.list.map((item, key) => {
                          return (
                            <div key={key} className="item ">
                              <div className="l-left">{item.name}</div>
                              <div className="r-right">x{item.t}</div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Record;
