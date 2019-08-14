import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class TddProcess extends Component {
  @observable input = "";

  @observable isFocus = false;
  handlechnage = e => {
    this.input = e.target.value;
  };
  handlefocus = () => {
    this.isFocus = true;
    console.log(this.isFocus);
  };

  render() {
    const error =
      this.input == "" && this.isFocus == true ? "please enter the name" : "";
    return (
      <div>
        <input
          type="text"
          data-testid="name"
          onFocus={this.handlefocus}
          onChange={this.handlechnage}
        />
        <div data-testid="validation-name">{error} </div>
      </div>
    );
  }
}
export default TddProcess;
