import React from "react";
import { ImagePicker, List, Toast, InputItem, Button } from "antd-mobile";
import SelfRadio from "./SelfRadio/index.jsx";
import SelfInput from "./SelfInput/index.jsx";
import { getImgCounty, getImgJ } from "./../../util/index.js";
import "./index.less";
class Diy extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // 背景图片
    //   files: [],
    //   //武将体力
    //   physical: 3,
    //   //武将势力
    //   country: 1,
    //   // 武将技能
    //   art: [
    //     {
    //       name: "",
    //       desc: ""
    //     },
    //     {
    //       name: "",
    //       desc: ""
    //     }
    //   ],
    //   // 武将名字
    //   heroName: "",
    //   // 武将四字成语
    //   heroText: "",
    //   width: 240,
    //   height: 360
    // };
    this.state = {
      // 背景图片
      files: [
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577250306418&di=d45e6146fa2b759a701cc20d3c961498&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9cc3b34ef1497b1385a2db877ef187d4f2a0692a840f3-Pbe9QE_fw658"
        }
      ],
      //武将体力
      physical: 3,
      //武将势力
      country: 1,
      // 武将技能
      art: [
        {
          name: "激昂",
          desc: "你打牌可以很激昂"
        },
        {
          name: "",
          desc: ""
        }
      ],
      // 武将名字
      heroName: "孙策",
      // 武将四字成语
      heroText: "江东小霸王",
      // cnavas宽高
      width: 240,
      height: 360
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
    console.log(heroTextArr, heroNameArr);
    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");
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
        ctx.font = "13px bold hycxj";
        // 设置颜色
        ctx.fillStyle = "#fcfcef";
        // 设置字体
        ctx.textAlign = "center";
        // 设置垂直对齐方式
        ctx.textBaseline = "middle";
        // 设置字体font family
        // ctx.fontFamily = "KaiTi";
        // 绘制文字
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
        ctx.font = "25px bold hycxj";
        // 设置颜色
        ctx.fillStyle = "#fcfcef";
        // 设置字体
        ctx.textAlign = "center";
        // 设置垂直对齐方式
        ctx.textBaseline = "middle";
        // 绘制文字
        heroNameArr.map((it, i) => {
          ctx.fillText(
            it,
            country === 3 ? 30 : 26,
            (4 - heroNameArr.length) * 5 + 180 + i * 30,
            30,
            30
          );
        });
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
        <canvas id="myCanvas" width={width} height={height}></canvas>
      </div>
    );
  }
}

export default Diy;
