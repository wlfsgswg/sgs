import React, { Component } from "react";
import { List, InputItem, TextareaItem, Button } from "antd-mobile";
import "./index.less";

class SelfInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="sgs-diy-selfinput">
        <div style={{ backgroundColor: "#f5f5f9", paddingBottom: "10px" }}>
          <div style={{ backgroundColor: "#fff" }}>
            <List renderHeader={() => "添加武将技能"}>
              {list.length !== 0 &&
                list.map((it, i) => {
                  return (
                    <div key={i} style={{ paddingBottom: "15px" }}>
                      <div style={{ padding: "10px 15px 0" }}>{`技能${i +
                        1}`}</div>
                      <InputItem
                        placeholder={`${
                          i === 0 ? "例如：激昂" : "技能名称限制二字以内"
                        }`}
                        value={it.name}
                        onChange={e => {
                          this.props.onChange("name", i, e);
                        }}
                        maxLength={2}
                      >
                        {`名称`}
                      </InputItem>
                      <TextareaItem
                        title="介绍"
                        value={it.desc}
                        placeholder={
                          i === 0
                            ? "例如：你打牌的时候可以很激昂"
                            : "请填写技能介绍"
                        }
                        onChange={e => this.props.onChange("desc", i, e)}
                        autoHeight
                        data-seed="logId"
                        maxLength={68}
                      />
                    </div>
                  );
                })}
              <Button onClick={() => this.props.onAdd()}>添加技能</Button>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SelfInput;
