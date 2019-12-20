import React, { Component } from "react";
import ReactClipboard from "react-clipboardjs-copy";
import { Toast } from "antd-mobile";
import "./index.less";

class Clipboard extends Component {
  constructor(props) {
    super(props);
  }

  handleClip = () => {
    console.log(this.props.type);
    const { type } = this.props;
    Toast.info(
      <div style={{ fontSize: "12px" }}>
        {`${type}已复制成功，打开QQ可直接黏贴搜索添加。`}
      </div>,
      2,
      () => {},
      true
    );
  };

  render() {
    const { num } = this.props;
    return (
      <div className="sgs-component-clipboard">
        <div className="sgs-component-clipboard-content clearfix">
          <div className="btn-focus l-left">{num}</div>
          <ReactClipboard
            text={num + ""}
            onSuccess={this.handleClip}
            onError={() => {}}
          >
            <div className="btn l-left" onClick={this.handleClip}>
              复制
            </div>
          </ReactClipboard>
        </div>
      </div>
    );
  }
}

export default Clipboard;
