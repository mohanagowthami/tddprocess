import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class TddProcess extends Component {
  @observable input = "";
  @observable isFocusOut = false;
  @observable isFocus = undefined;
  handlechnage = e => {
    this.input = e.target.value;
  };

  handleFocus = () => {
    this.isFocus = this.isFocus == undefined ? true : !this.isFocus;
  };

  render() {
    const error =
      this.input == "" && this.isFocus == false ? "please enter the name" : "";
    return (
      <div>
        <input
          type="text"
          data-testid="name"
          onBlur={this.handleFocus}
          onChange={this.handlechnage}
          onFocus={this.handleFocus}
        />
        <div data-testid="validation-name">{error} </div>
      </div>
    );
  }
}
export default TddProcess;
