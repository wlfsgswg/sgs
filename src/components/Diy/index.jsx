import React from "react";
import {
  ImagePicker,
  List,
  Toast,
  InputItem,
  Button,
  Modal,
  Radio
} from "antd-mobile";
import SelfRadio from "./SelfRadio/index.jsx";
import SelfInput from "./SelfInput/index.jsx";
import {
  getImgCounty,
  getImgJ,
  stringToArr,
  getPixelRatio
} from "./../../util/index.js";
const RadioItem = Radio.RadioItem;

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
      // 武将描述
      heroText: "",
      width: 260,
      height: 390,
      strDataURI: "",
      modal: false,
      linkBol: true
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
    Toast.loading("处理中，稍等...", 1);
    setTimeout(() => {
      this.handleDraw();
    }, 1000);
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
      physical,
      linkBol
    } = this.state;
    const heroTextArr = heroText.split("");
    const heroNameArr = heroName.split("");
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");

    const ratio = getPixelRatio(ctx);
    myCanvas.width = width * ratio;
    myCanvas.height = height * ratio;

    // // 字体加载
    // 先清除画布
    ctx.clearRect(0, 0, width, height);
    // 获取背景图
    const imgBgcStr = getImgCounty(country, physical);

    // 武将图
    const imgHero = new Image();
    imgHero.crossOrigin = "anonymous";
    imgHero.onload = () => {
      ctx.drawImage(
        imgHero,
        38 * ratio,
        20 * ratio,
        (width - 50) * ratio,
        (height - 30) * ratio
      );
      // 画完武将再画背景，背景在武将上边
      const imgBgc = new Image();
      imgBgc.crossOrigin = "anonymous";
      imgBgc.onload = () => {
        ctx.drawImage(imgBgc, 0, 0, width * ratio, height * ratio);
        // 等所有图片请求完再做其他操作
        // 写描述
        ctx.font = `${16 * ratio}px myFont1`;
        ctx.fillStyle = "#f1d96c";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        heroTextArr.map((it, i) => {
          ctx.fillText(
            it,
            (country === 3 ? 32 : 28) * ratio,
            ((6 - heroTextArr.length) * 10 + 70 + i * 17) * ratio,
            30 * ratio,
            30 * ratio
          );
        });
        // 写武将名字
        ctx.font = `${30 * ratio}px myFont`;
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
            (country === 3 ? 30 : 26) * ratio,
            ((4 - heroNameArr.length) * 5 + 180 + i * 30) * ratio,
            30 * ratio,
            30 * ratio
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
        const rect = (RectHeight + 29) * ratio;

        const rectPosTop = 370 * ratio - rect;
        const rectPosLeft = 44 * ratio;
        ctx.fillRect(rectPosLeft, rectPosTop, 199 * ratio, rect);
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
              const st1 =
                stringToArr(art[0].desc, 17).length === 1
                  ? 14 * ratio
                  : 4 * ratio;
              const tt1 =
                stringToArr(art[0].desc, 17).length === 1
                  ? 25 * ratio
                  : 15 * ratio;
              let st2;
              let tt2;
              if (
                stringToArr(art[0].desc, 17).length === 1 &&
                stringToArr(art[1].desc, 17).length === 1
              ) {
                st2 = 24 * ratio;
                tt2 = 35 * ratio;
              } else if (
                stringToArr(art[0].desc, 17).length !== 1 &&
                stringToArr(art[1].desc, 17).length !== 1
              ) {
                st2 = 4 * ratio;
                tt2 = 15 * ratio;
              } else {
                st2 = 14 * ratio;
                tt2 = 25 * ratio;
              }

              ctx.drawImage(
                imgLeft,
                rectPosLeft - 30 * ratio,
                i === 0
                  ? rectPosTop + 4 * ratio
                  : i === 1
                  ? rectPosTop +
                    st1 +
                    2 * ratio +
                    stringToArr(art[0].desc, 17).length * 11 * ratio
                  : rectPosTop +
                    st2 +
                    4 +
                    stringToArr(art[0].desc, 17).length * 11 * ratio +
                    stringToArr(art[1].desc, 17).length * 11 * ratio,
                50 * ratio,
                25 * ratio
              );
              ctx.font = `${14 * ratio}px sans-serif`;
              ctx.fillStyle = "#000";
              ctx.fillText(
                it.name,
                rectPosLeft - 23 * ratio,
                i === 0
                  ? rectPosTop + 15 * ratio
                  : i === 1
                  ? rectPosTop +
                    tt1 +
                    2 * ratio +
                    stringToArr(art[0].desc, 17).length * 11 * ratio
                  : rectPosTop +
                    tt2 +
                    4 * ratio +
                    stringToArr(art[0].desc, 17).length * 11 * ratio +
                    stringToArr(art[1].desc, 17).length * 11 * ratio
              );
            };
            imgLeft.src = getImgJ(country);
            ctx.font = `${10 * ratio}px sans-serif`;
            ctx.fillStyle = "#fff";

            destArr.map((it, index) => {
              const ot1 =
                stringToArr(art[0].desc, 17).length === 1
                  ? 24 * ratio
                  : 14 * ratio;
              let ot2;
              if (
                stringToArr(art[0].desc, 17).length === 1 &&
                stringToArr(art[1].desc, 17).length === 1
              ) {
                ot2 = 34 * ratio;
              } else if (
                stringToArr(art[0].desc, 17).length !== 1 &&
                stringToArr(art[1].desc, 17).length !== 1
              ) {
                ot2 = 14 * ratio;
              } else {
                ot2 = 24 * ratio;
              }

              ctx.fillText(
                it,
                rectPosLeft + 20 * ratio,
                i === 0
                  ? rectPosTop + 14 * ratio + index * 11 * ratio
                  : i === 1
                  ? rectPosTop +
                    ot1 +
                    2 * ratio +
                    stringToArr(art[0].desc, 17).length * 11 * ratio +
                    index * 11 * ratio
                  : rectPosTop +
                    ot2 +
                    4 * ratio +
                    stringToArr(art[0].desc, 17).length * 11 * ratio +
                    stringToArr(art[1].desc, 17).length * 11 * ratio +
                    index * 11 * ratio
              );
            });

            ctx.font = `${12 * ratio}px sans-serif`;
            ctx.fillStyle = "#fff";
            ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            if (linkBol)
              ctx.fillText(
                "Copyright:小黑，链接：applis.applinzi.com/",
                40 * ratio,
                380 * ratio,
                200 * ratio,
                20 * ratio
              );
            ctx.shadowColor = "rgba(0, 0, 0, 1)";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;

            setTimeout(() => {
              const strDataURI = myCanvas.toDataURL("image/jpeg");
              this.setState({ strDataURI, modal: true });
            }, 300);

            //
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
      height,
      linkBol
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
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "是否添加原作者"}>
              <RadioItem
                key={3}
                checked={linkBol}
                onChange={() => this.setState({ linkBol: true })}
              >
                是
              </RadioItem>
              <RadioItem
                key={4}
                checked={!linkBol}
                onChange={() => this.setState({ linkBol: false })}
              >
                否
              </RadioItem>
            </List>
          </div>
        </div>

        <Button type="primary" onClick={this.handleSummit}>
          点击生成DIY武将
        </Button>
        <div style={{ width, margin: "0 auto" }}>
          <canvas
            id="myCanvas"
            width={width}
            height={height}
            style={{ position: "absolute", left: "-2000" }}
          ></canvas>
        </div>
        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
          onClose={() => this.setState({ modal: false })}
          title="DIY武将"
          style={{ width: "300px" }}
          afterClose={() => {}}
          footer={[
            {
              text: "长按图片实现保存分享",
              onPress: () => {
                this.setState({ modal: false });
              }
            }
          ]}
        >
          <img src={this.state.strDataURI} alt="" style={{ width: "260px" }} />
        </Modal>
      </div>
    );
  }
}

export default Diy;
