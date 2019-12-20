import React, { Component } from "react";
import "./index.less";

class Clipboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { num } = this.props;
    return (
      <div className="sgs-component-clipboard">
        <div className="sgs-component-clipboard-content clearfix">
          <div className="btn-focus l-left">{num}</div>
          <div className="btn l-left">复制</div>
        </div>
      </div>
    );
  }
}

export default Clipboard;
