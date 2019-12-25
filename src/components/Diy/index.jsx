import React from "react";
import { ImagePicker, List, Toast, InputItem, Button } from "antd-mobile";
import SelfRadio from "./SelfRadio/index.jsx";
import SelfInput from "./SelfInput/index.jsx";
import { getImgCounty, getImgJ, stringToArr } from "./../../util/index.js";
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
      heroText: "",
      width: 260,
      height: 390
    };
  }

  handleChange = files => {
    this.setState({ files });
  };
  // 一键生成cnavans,条件预判
  handleSummit = () => {
    const { heroName, heroText, art, files, width, height } = this.state;
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
    const {
      heroName,
      heroText,
      art,
      files,
      width,
      height,
      country,
      physical
    } = this.state;
    const heroTextArr = heroText.split("");
    const heroNameArr = heroName.split("");
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");
    // // 字体加载
    // 先清除画布
    ctx.clearRect(0, 0, width, height);
    // 获取背景图
    const imgBgcStr = getImgCounty(country, physical);

    // 武将图
    const imgHero = new Image();
    imgHero.onload = () => {
      ctx.drawImage(imgHero, 38, 20, width - 50, height - 30);
      // 画完武将再画背景，背景在武将上边
      const imgBgc = new Image();
      imgBgc.onload = () => {
        ctx.drawImage(imgBgc, 0, 0, width, height);
        // 等所有图片请求完再做其他操作
        // 写描述
        ctx.font = "16px myFont1";
        ctx.fillStyle = "#f1d96c";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        heroTextArr.map((it, i) => {
          ctx.fillText(
            it,
            country === 3 ? 32 : 28,
            (6 - heroTextArr.length) * 10 + 70 + i * 17,
            30,
            30
          );
        });
        // 写武将名字
        ctx.font = "30px myFont";
        ctx.fillStyle = "#fcfcef";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // 轻微模糊阴影
        ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        heroNameArr.map((it, i) => {
          ctx.fillText(
            it,
            country === 3 ? 30 : 26,
            (4 - heroNameArr.length) * 5 + 180 + i * 30,
            30,
            30
          );
        });
        // 画武将技能框
        // 透明实心矩形
        // 边框颜色
        ctx.fillStyle =
          country === 1
            ? "rgba(166,176,189,0.5)"
            : country === 2
            ? "rgba(219,191,166,0.5)"
            : country === 3
            ? "rgba(164,168,131,0.5)"
            : country === 4
            ? "rgba(164,161,157,0.5)"
            : "";
        // 长方形高度和定位高度存在关联
        let RectHeight = 0;
        art.map((it, i) => {
          const length = stringToArr(it.desc, 17).length * 11;
          RectHeight += length;
        });
        const rect = RectHeight + 25;

        const rectPosTop = 370 - rect;
        const rectPosLeft = 44;
        ctx.fillRect(rectPosLeft, rectPosTop, 198, rect);
        // 添加技能描述
        art.map((it, i) => {
          ctx.shadowColor = "rgba(0, 0, 0, 1)";
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowBlur = 0;

          ctx.textAlign = "left";
          // 画技能图
          if (it.name) {
            const imgLeft = new Image();
            const destArr = stringToArr(it.desc, 17);

            imgLeft.onload = () => {
              const st1 = stringToArr(art[0].desc, 17).length === 1 ? 14 : 4;
              const tt1 = stringToArr(art[0].desc, 17).length === 1 ? 25 : 15;
              let st2;
              let tt2;
              if (
                stringToArr(art[0].desc, 17).length === 1 &&
                stringToArr(art[1].desc, 17).length === 1
              ) {
                st2 = 24;
                tt2 = 35;
              } else if (
                stringToArr(art[0].desc, 17).length !== 1 &&
                stringToArr(art[1].desc, 17).length !== 1
              ) {
                st2 = 4;
                tt2 = 15;
              } else {
                st2 = 14;
                tt2 = 25;
              }

              ctx.drawImage(
                imgLeft,
                rectPosLeft - 30,
                i === 0
                  ? rectPosTop + 4
                  : i === 1
                  ? rectPosTop + st1 + stringToArr(art[0].desc, 17).length * 11
                  : rectPosTop +
                    st2 +
                    stringToArr(art[0].desc, 17).length * 11 +
                    stringToArr(art[1].desc, 17).length * 11,
                50,
                25
              );
              ctx.font = "14px sans-serif";
              ctx.fillStyle = "#000";
              ctx.fillText(
                it.name,
                rectPosLeft - 23,
                i === 0
                  ? rectPosTop + 15
                  : i === 1
                  ? rectPosTop + tt1 + stringToArr(art[0].desc, 17).length * 11
                  : rectPosTop +
                    tt2 +
                    stringToArr(art[0].desc, 17).length * 11 +
                    stringToArr(art[1].desc, 17).length * 11
              );
            };
            imgLeft.src = getImgJ(country);
            ctx.font = "10px sans-serif";
            ctx.fillStyle = "#fff";

            destArr.map((it, index) => {
              const ot1 = stringToArr(art[0].desc, 17).length === 1 ? 24 : 14;
              let ot2;
              if (
                stringToArr(art[0].desc, 17).length === 1 &&
                stringToArr(art[1].desc, 17).length === 1
              ) {
                ot2 = 34;
              } else if (
                stringToArr(art[0].desc, 17).length !== 1 &&
                stringToArr(art[1].desc, 17).length !== 1
              ) {
                ot2 = 14;
              } else {
                ot2 = 24;
              }

              ctx.fillText(
                it,
                rectPosLeft + 20,
                i === 0
                  ? rectPosTop + 14 + index * 11
                  : i === 1
                  ? rectPosTop +
                    ot1 +
                    stringToArr(art[0].desc, 17).length * 11 +
                    index * 11
                  : rectPosTop +
                    ot2 +
                    stringToArr(art[0].desc, 17).length * 11 +
                    stringToArr(art[1].desc, 17).length * 11 +
                    index * 11
              );
            });
          }
        });
        //
      };
      imgBgc.src = imgBgcStr;
    };
    imgHero.src = files[0].url;
  };

  render() {
    const {
      files,
      physical,
      country,
      art,
      heroName,
      heroText,
      width,
      height
    } = this.state;
    return (
      <div className="sgs-component-diy">
        <div className="sgs-component-diy-menu">
          <div className="top">DIY三国杀武将</div>
        </div>
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "填写武将名称（最多三字）"}>
              <InputItem
                placeholder={`例如：孙策`}
                value={heroName}
                onChange={e => {
                  this.setState({ heroName: e });
                }}
                maxLength={3}
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
        <div style={{ width, margin: "0 auto" }}>
          <div>
            下图为diy图片展示区，完成输入框填写，点击按钮即可展示，开发ing，敬请等待
          </div>
          <canvas id="myCanvas" width={width} height={height}></canvas>
        </div>
      </div>
    );
  }
}

export default Diy;
