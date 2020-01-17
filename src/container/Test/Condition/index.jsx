import React, { Component } from "react";
import { Carousel, WingBlank, Tabs, NoticeBar } from "antd-mobile";
import "./index.less";
const Sgs1 =
  "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3723280583,1768992622&fm=26&gp=0.jpg";
const Sgs2 =
  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2383279309,161228295&fm=26&gp=0.jpg";
const Sgs3 =
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2376780534,900408061&fm=26&gp=0.jpg";
const Sgs4 =
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1248731800,4059826141&fm=26&gp=0.jpg";
class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [Sgs1, Sgs2, Sgs3, Sgs4]
    };
  }

  render() {
    const { active, tabs } = this.props;
    return (
      <div className="sgs-test-condition">
        <div className="sgs-test-condition-content">
          <div className="wing-blank">
            <WingBlank>
              <Carousel autoplay={true} infinite>
                {this.state.data.map((it, index) => (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      width: "100%",
                      height: 200
                    }}
                  >
                    <img
                      src={it}
                      alt=""
                      style={{ width: "100%", verticalAlign: "top" }}
                      onLoad={() => {
                        window.dispatchEvent(new Event("resize"));
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </WingBlank>
          </div>
          <NoticeBar
            marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}
          >
            以下为2019年12.13-12.19祈福宝箱模拟；以及截止于12.31的武将礼包概率模拟；选择下列模拟选项卡，能对不同礼包进行模拟。
          </NoticeBar>
          <Tabs
            tabs={tabs}
            initialPage={active}
            tabBarTextStyle={{ fontSize: "12px", padding: "0 5px" }}
            onChange={e => this.props.onChange(e.key)}
          ></Tabs>
        </div>
      </div>
    );
  }
}

export default Condition;
