import React, { Component } from "react";
import "./root.less";
// import { TabBar } from "./../components/index.js";
import QqShouSha from "./../image/img-ewm/shousha_qq.png";
import WxShouSha from "./../image/img-ewm/shousha_wx.jpg";
import QqOl from "./../image/img-ewm/ol_qq.png";
import WxOl from "./../image/img-ewm/ol_wx.jpg";
class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        {/* <TabBar /> */}
        <div className="wlf-root-content">
          <div className="wlf-root-content-top">
            好消息，好消息，【祈福模拟】，【手杀道具模拟】小程序正式上线微信和QQ平台啦，包含OL、十周年历次祈福活动；手杀数次开盒子模拟体验。您可以通过以下三种方式进行体验：
          </div>
          <div className="fw600 p-t-10 p-b-10">
            方法1：打开QQ或微信直接搜【祈福模拟】，【手杀道具模拟】QQ或微信小程序进入即可模拟
          </div>
          <div className="fw600 p-b-10">
            方法2：长按屏幕或则截图保存以下QQ小程序二维码通过QQ扫一扫识别二维码即可进入模拟，左【祈福模拟】QQ二维码，右【手杀道具模拟】QQ二维码
          </div>
          <div className="clearfix">
            <div className="l-left">
              <div className="img">
                <img src={QqOl} alt="" style={{ width: "150px" }} />
              </div>
            </div>
            <div className="r-right">
              <div className="img">
                <img src={QqShouSha} alt="" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
          <div className="fw600">
            方法3：长按屏幕或则截图保存以下微信小程序二维码通过微信扫一扫识别二维码即可进入模拟，左【祈福模拟】微信二维码，右【手杀道具模拟】微信二维码
          </div>
          <div className="clearfix">
            <div className="l-left">
              <div className="img">
                <img src={WxOl} alt="" style={{ width: "150px" }} />
              </div>
            </div>
            <div className="r-right">
              <div className="img">
                <img src={WxShouSha} alt="" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
