import React from "react";
import { ImagePicker, List, Toast } from "antd-mobile";
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
      ]
    };
  }

  handleChange = files => {
    this.setState({ files });
  };

  render() {
    const { files, physical, country, art } = this.state;
    return (
      <div className="sgs-component-diy">
        <div className="sgs-component-diy-menu">
          <div className="top">DIY三国杀武将</div>
        </div>
        <SelfRadio
          physical={physical}
          country={country}
          onChangePhy={e => this.setState({ physical: e })}
          onChangeCou={e => this.setState({ country: e })}
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
        />
      </div>
    );
  }
}

export default Diy;
