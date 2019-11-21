import React, { Component } from "react";
import "./less/base.less";
import Root from "./container/Root.jsx";
import { LocaleProvider } from "antd-mobile";
import enUS from "antd-mobile/lib/locale-provider/en_US";

export default class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Root />
      </LocaleProvider>
    );
  }
}
