import React, { Component } from "react";
import Bgc from "./img/bgc.jpeg";
import Liu from "./img/liuxie.jpeg";
import "./index.less";

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
              {/* <div className="title2">2</div>
              <div className="title3">3</div> */}
              <div className="title2">百度原创三国杀视频解说</div>
              <div className="title3">如果对作者感兴趣，点击一下头像试试看</div>
            </div>
          </div>
          <div className="bottom clearfix">
            <div className="l-left">
              <div className="item">开发者</div>
              <div className="qun-right">
                <span style={{ marginRight: "30px" }}>QQ:</span>
                <span style={{ color: "red", opacity: "0.7" }}>2496436621</span>
              </div>
            </div>
            <div className="l-left" style={{ marginRight: "20px" }}>
              <div className="item l-left">点击图标联系作者</div>
            </div>
            <div className="l-left" style={{ marginTop: "10px" }}>
              <a
                class="qq-chat"
                href="http://wpa.qq.com/msgrd?v=3&uin=2496436621&site=qq&menu=yes"
                target="_blank"
              >
                <img
                  alt="联系开发者"
                  style={{ width: "40px" }}
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574420007801&di=a257e5bc68434f9af2a9279d05647fe2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F94e5778c5e82196185851eca538d9082a9fb9c8e3e05-klul1g_fw658"
                />
              </a>
            </div>
          </div>

          <div className="bottom">
            <div className="item">小黑群欢迎您 </div>
            <div className="qun-right">
              <span style={{ marginRight: "30px" }}>群号:</span>
              <span style={{ color: "red", opacity: "0.7" }}>739385220</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
