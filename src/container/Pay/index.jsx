import React, { Component } from "react";
import "./index.less";
import { Diy } from "./../../components/index.js";
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="sgs-pay">
        <div className="sgs-pay-content">
          <Diy />
        </div>
      </div>
    );
  }
}
export default Record;
