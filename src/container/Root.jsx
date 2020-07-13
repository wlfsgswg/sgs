import React, { Component } from "react";
import "./root.less";
// import { TabBar } from "./../components/index.js";
class Root extends Component {
  render() {
    return (
      <div className="wlf-root">
        {/* <TabBar /> */}
        <div className="wlf-root-content">
          <div className="wlf-root-content-top">
            为方便大家更好的接触三国杀祈福模拟，祈福模式现已升级，现在通过QQ直接打开小程序就能实现祈福啦！！！
          </div>
          <div className="p-t-10 p-b-10">方法一：</div>
          <div className="fw600">
            打开QQ直接搜【祈福模拟】QQ小程序进入即可祈福
          </div>
          <div className="p-t-10 p-b-10">方法二：</div>
          <div className="fw600">
            长按屏幕保存以下QQ小程序二维码通过QQ扫一扫识别二维码即可进入祈福
          </div>
          <div className="img">
            <img
              src="http://wlf-sgswg.oss-cn-hangzhou.aliyuncs.com/qfmn/qq.png"
              alt=""
              style={{ width: "200px" }}
            />
          </div>
          <div className="fw600">
            祈福模拟小程序包含三国杀历次祈福活动，打破网页端祈福单一性，不仅有【OL】版本祈福，更包含【十周年】版本祈福，欢迎大家尝试和光临！
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
