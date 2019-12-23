import React from "react";
import { ImagePicker, List } from "antd-mobile";
import SelfRadio from "./SelfRadio/index.jsx";
import "./index.less";
class Diy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      //武将体力
      physical: 3,
      //武将势力
      country: 1
    };
  }

  handleChange = files => {
    this.setState({ files });
  };

  render() {
    const { files, physical, country } = this.state;
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
            <List renderHeader={() => "从手机中选择一张背景图"}>
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
      </div>
    );
  }
}

export default Diy;
