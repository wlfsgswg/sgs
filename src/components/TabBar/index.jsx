import React from "react";
import { TabBar } from "antd-mobile";
import "./index.less";
import Test from "./../../container/Test/index.jsx";
import Record from "./../../container/Record/index.jsx";
import Pay from "./../../container/Pay/index.jsx";
import CopyRight from "./../../container/CopyRight/index.jsx";
import IconReA from "./icon/record_a.png";
import IconRe from "./icon/record.png";
import IconTeA from "./icon/test_a.png";
import IconTe from "./icon/test.png";

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "1",
      hidden: false,
      active: "1"
    };
  }

  renderContent(pageText) {
    const { selectedTab } = this.state;
    return (
      <div>
        {selectedTab === "1" ? (
          <Test />
        ) : selectedTab === "2" ? (
          <Record />
        ) : selectedTab === "3" ? (
          <Pay />
        ) : (
          <CopyRight />
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="sgs-components-tabbar">
        <div className="sgs-components-tabbar-content">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="测试"
              key="测试"
              icon={
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: `url(${IconTe}) center center /  24px 24px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: `url(${IconTeA}) center center /  24px 24px no-repeat`
                  }}
                />
              }
              selected={this.state.selectedTab === "1"}
              // badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: "1"
                });
              }}
              data-seed="logId"
            >
              {this.renderContent()}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${IconRe}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${IconReA}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              title="记录"
              key="记录"
              // badge={"new"}
              selected={this.state.selectedTab === "2"}
              onPress={() => {
                this.setState({
                  selectedTab: "2"
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent()}
            </TabBar.Item>
            <TabBar.Item
              icon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
              }}
              selectedIcon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
              }}
              title="花费"
              key="花费"
              // dot
              selected={this.state.selectedTab === "3"}
              onPress={() => {
                this.setState({
                  selectedTab: "3"
                });
              }}
            >
              {this.renderContent()}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="制作"
              key="制作"
              selected={this.state.selectedTab === "4"}
              onPress={() => {
                this.setState({
                  selectedTab: "4"
                });
              }}
            >
              {this.renderContent()}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
export default TabBarExample;
