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
          <div className="bottom">
            <div className="item">如果想加入小黑群点击qq标志试一下 </div>
            <div className="clearfix">
              <div className="l-left">
                <div className="qun">
                  <a
                    target="_blank"
                    href="//shang.qq.com/wpa/qunwpa?idkey=d11bfde921e1767bced2034a780dc2ee3e6a95c4f2080f8a2ab222ad9a27c631"
                  >
                    <img
                      border="0"
                      src="//pub.idqqimg.com/wpa/images/group.png"
                      alt="小黑D三国杀-交流群"
                      title="小黑D三国杀-交流群"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="r-right qun-right">
                <div>群号</div>
                <div style={{ color: "red", opacity: "0.7" }}>739385220</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
