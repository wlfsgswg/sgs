import React, { Component } from "react";
import Bgc from "./img/bgc.jpeg";
import Liu from "./img/liuxie.jpeg";
import "./index.less";
import Qq from "./../../icon/qq.png";
import Qqq from "./../../icon/qqqun.png";
import { Clipboard } from "./../../components/index.js";
class CopyRight extends Component {
  render() {
    return (
      <div className="sgs-copy">
        <div className="sgs-copy-content">
          <div className="top">
            <img src={Bgc} alt="" />
          </div>
          <div className="pos">
            <div className="content">
              <div className="img">
                <a href="https://author.baidu.com/home/1625815363789028">
                  <img src={Liu} alt="" />
                </a>
              </div>

              <div className="title">小黑D三国杀世界</div>
              <div className="title2">百度原创三国杀视频解说</div>
              <div className="title3">如果对作者感兴趣，点击一下头像试试看</div>
            </div>
          </div>
          <div className="bottom">
            <div className="content">
              <div className="item">
                <div className="left">
                  <div className="p-r-10 clearfix">
                    <div className="l-left p-r-10 my-icon-div">
                      <img
                        src={Qq}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div className="l-left">QQ</div>
                  </div>
                </div>
                <div className="right ">
                  <Clipboard num={2496436621} type={"QQ号"} />
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="p-r-10 clearfix">
                    <div className="l-left p-r-10 my-icon-div">
                      <img
                        src={Qqq}
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                    </div>
                    <div className="l-left">QQ群</div>
                  </div>
                </div>
                <div className="right">
                  <Clipboard num={739385220} type={"QQ群号"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
