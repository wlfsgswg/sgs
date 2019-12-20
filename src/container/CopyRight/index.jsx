import React, { Component } from "react";
import { Drawer, Modal } from "antd-mobile";
import Bgc from "./img/bgc.jpeg";
import Liu from "./img/liuxie.jpeg";
import "./index.less";
import Qq from "./../../icon/qq.png";
import Qqq from "./../../icon/qqqun.png";
import Self from "./../../icon/self.png";
import Right from "./../../icon/right.png";
import Dog from "./../../icon/dog.png";
import Red from "./../../icon/red.png";
import RedB from "./img/red-b.jpg";
import { Clipboard } from "./../../components/index.js";
class CopyRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false
    };
  }

  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  };

  showModal = e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      modal: true
    });
  };

  render() {
    const { open, modal } = this.state;
    const sidebar = (
      <div style={{ width: "200px", padding: "20px" }}>
        <p>小黑</p>
        <p>90后/IT男</p>
        <p>三国杀游戏解说</p>
        <p>百度账号</p>
        <div className="p-fs">小黑D三国杀世界</div>
        <p>欢迎搜索关注、给你好看</p>
        <div>
          <img src={Dog} alt="" style={{ width: "100px" }} />
        </div>
        <p>三国杀小伙伴们(排名不分先后)</p>
        <p>
          国当梦、谯雨舍、断剑残垣、丰千秩、一梦三江、快船总经理F、星辰遗迹、庞协虑、风流幻、辣B，小心、阿释密达、水是醒来的冰、陆陆晚安、路西菲菲菲、把卡、刘如青、将进酒、苗并近、中原五百、聂辩、嘛比德、南都屈南子真、
          严笑醉、ylx羚羊、一只撸猫怪、龙安远、斯库拉、自由之盾、战神灬斗尊...
        </p>
        <p>还有很多，欢迎提醒我会一一补充</p>
      </div>
    );
    return (
      <div className="sgs-copy">
        <Drawer
          className="my-drawer"
          enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center"
          }}
          sidebar={sidebar}
          open={open}
          onOpenChange={this.onOpenChange}
        >
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
                <div className="title3">
                  如果对作者感兴趣，点击一下头像试试看
                </div>
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
                      <div className="l-left">作者QQ</div>
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
                <div className="item">
                  <div className="left">
                    <div className="p-r-10 clearfix">
                      <div className="l-left p-r-10 my-icon-div">
                        <img
                          src={Self}
                          alt=""
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                      <div className="l-left">自我介绍</div>
                    </div>
                  </div>
                  <div className="right">
                    <img
                      src={Right}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                      onClick={this.onOpenChange}
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="left">
                    <div className="p-r-10 clearfix">
                      <div className="l-left p-r-10 my-icon-div">
                        <img
                          src={Red}
                          alt=""
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                      <div className="l-left">红包</div>
                    </div>
                  </div>
                  <div className="right c999" onClick={this.showModal}>
                    获取
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
        <Modal
          visible={modal}
          transparent
          maskClosable={false}
          onClose={() => this.setState({ modal: false })}
          title="红包"
          footer={[
            {
              text: "Ok",
              onPress: () => {
                this.setState({ modal: false });
              }
            }
          ]}
          afterClose={() => console.log("afterClose")}
        >
          <div style={{ height: 400, overflow: "scroll" }}>
            <img src={RedB} alt="" style={{ height: "350px" }} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default CopyRight;
