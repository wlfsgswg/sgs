import React, { Component } from "react";
import { Carousel, WingBlank, Tabs, NoticeBar } from "antd-mobile";
import "./index.less";
const Sgs1 =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577340722258&di=81fa289093e4ac22a1324af0783a77aa&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1305%2F18%2Fc0%2F21057146_21057146_1368849752640.jpg";
const Sgs2 =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577340722258&di=ee3f7344a588f22fcf09959c32548e6d&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F3g%2F2m%2FQJ6193278952.jpg%3Fx-oss-process%3Dstyle%2Fshow";
const Sgs3 =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577340722257&di=ace5c012812b77370d362e75f77ca85b&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fdcbbs%2F20054%2Fa20053327_01000.jpg";
const Sgs4 =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577340722256&di=29190f99f5cd6ad415b91ff8f0d7622b&imgtype=0&src=http%3A%2F%2Fi5.3conline.com%2Fimages%2Fpiclib%2F201001%2F05%2Fbatch%2F1%2F51294%2F1262701836620fbqy1kdqi4.jpg";
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
