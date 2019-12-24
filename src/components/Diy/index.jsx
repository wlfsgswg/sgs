import React from "react";
import { ImagePicker, List, Toast, InputItem, Button } from "antd-mobile";
import SelfRadio from "./SelfRadio/index.jsx";
import SelfInput from "./SelfInput/index.jsx";
import "./index.less";
class Diy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 背景图片
      files: [],
      //武将体力
      physical: 3,
      //武将势力
      country: 1,
      // 武将技能
      art: [
        {
          name: "",
          desc: ""
        },
        {
          name: "",
          desc: ""
        }
      ],
      // 武将名字
      heroName: "",
      // 武将四字成语
      heroText: ""
    };
  }

  handleChange = files => {
    this.setState({ files });
  };
  // 一键生成cnavans,条件预判
  handleSummit = () => {
    const { heroName, heroText, art, files } = this.state;
    if (!heroName)
      return Toast.info(
        <div style={{ fontSize: "12px" }}>请填写武将名称！</div>,
        1
      );
    if (!heroText)
      return Toast.info(
        <div style={{ fontSize: "12px" }}>请填写武将描述！</div>,
        1
      );
    for (let i = 0; i < art.length; i++) {
      if (i === 0 && !(art[i].name && art[i].desc))
        return Toast.info(
          <div style={{ fontSize: "12px" }}>技能1名称和描述两者均为必填！</div>,
          2
        );
      if (i !== 0) {
        if (!!art[i].name === true && !!art[i].desc === false)
          return Toast.info(
            <div style={{ fontSize: "12px" }}>
              技能名称和描述两者要同时填写！
            </div>,
            2
          );
        if (!!art[i].name === false && !!art[i].desc === true)
          return Toast.info(
            <div style={{ fontSize: "12px" }}>
              技能名称和描述两者要同时填写！
            </div>,
            2
          );
      }
    }
    if (!files.length)
      return Toast.info(
        <div style={{ fontSize: "12px" }}>你需要上传背景图片！</div>,
        1
      );
    this.handleDraw();
  };
  // 画图
  handleDraw = () => {
    console.log(1);
  };

  render() {
    const { files, physical, country, art, heroName, heroText } = this.state;
    return (
      <div className="sgs-component-diy">
        <div className="sgs-component-diy-menu">
          <div className="top">DIY三国杀武将</div>
        </div>
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "填写武将名称"}>
              <InputItem
                placeholder={`例如：孙策`}
                value={heroName}
                onChange={e => {
                  this.setState({ heroName: e });
                }}
                maxLength={4}
              >
                武将名称
              </InputItem>
            </List>
          </div>
        </div>
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "填写武将描述（最多六字）"}>
              <InputItem
                placeholder={`例如：江东小霸王`}
                value={heroText}
                onChange={e => {
                  this.setState({ heroText: e });
                }}
                maxLength={6}
              >
                武将描述
              </InputItem>
            </List>
          </div>
        </div>

        <SelfInput
          list={art}
          onAdd={() => {
            const { art } = this.state;
            if (art.length < 3) {
              art.push({ name: "", desc: "" });
              this.setState({ art });
            } else {
              Toast.info(
                <div style={{ fontSize: "12px" }}>武将最多只能有三个技能</div>,
                1,
                () => {},
                true
              );
            }
          }}
          onChange={(para, i, e) => {
            const { art } = this.state;
            art.map((it, index) => {
              if (index === i) {
                it[para] = e;
              }
            });
            this.setState({ art });
          }}
        />
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List
              renderHeader={() => "从手机中选择一张背景图"}
              className="list-pos-rel"
            >
              <div className="list-pos-pos">
                <div className="p-b-10">上传背景图注意事项</div>
                <div className="list">
                  1.请尽量选择宽高比比例为2:3的背景图片，例如：宽120px，高180px，这样不容易失真。
                </div>
                <div className="list">
                  2.上传图片成功后，可以点击展示图片下方的按钮，进行更改图片。
                </div>
              </div>
              {files.length !== 0 ? (
                <div className="menu-div">
                  <div className="diy-div">
                    <img src={files[0].url} alt="" />
                    <div
                      className="pos"
                      onClick={() => this.setState({ files: [] })}
                    >
                      更改图片
                    </div>
                  </div>
                </div>
              ) : (
                <ImagePicker
                  files={files}
                  onChange={this.handleChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={1}
                  multiple={false}
                  length={2}
                  disableDelete={true}
                />
              )}
            </List>
          </div>
        </div>
        <SelfRadio
          physical={physical}
          country={country}
          onChangePhy={e => this.setState({ physical: e })}
          onChangeCou={e => this.setState({ country: e })}
        />
        <Button type="primary" onClick={this.handleSummit}>
          点击生成DIY武将
        </Button>
        <div className="sgs-component-muban-font">甘宁</div>
        <div className="sgs-component-muban-font2">甘宁</div>
      </div>
    );
  }
}

export default Diy;
