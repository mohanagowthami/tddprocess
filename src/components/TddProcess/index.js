import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class TddProcess extends Component {
  @observable input = "";
  @observable inputNumber = "";
  @observable isFocus = undefined;
  @observable isFocusNumber = undefined;

  handlechnage = e => {
    this.input = e.target.value;
  };

  handleFocus = () => {
    this.isFocus = this.isFocus == undefined ? true : !this.isFocus;
  };
  handlechnageNumber = e => {
    this.inputNumber = e.target.value;
  };

  handleFocusNumber = () => {
    this.isFocusNumber =
      this.isFocusNumber == undefined ? true : !this.isFocusNumber;
  };
  handleFocus = () => {
    this.isFocus = this.isFocus == undefined ? true : !this.isFocus;
  };
  handleChangeSelect = e => {
    this.props.onChangeSelect(e.target.value);
  };

  render() {
    const error =
      this.input == "" && this.isFocus == false ? "please enter the name" : "";
    const errorNumber =
      this.inputNumber.length < 10 && this.isFocusNumber == false
        ? "please enter the 10 digit phone number"
        : "";
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];
    const optionArray = numbers.map(number => {
      return <option value={number}> {number}</option>;
    });
    console.log(" option", optionArray);
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
        <input
          type="text"
          data-testid="phone-number"
          onBlur={this.handleFocusNumber}
          onChange={this.handlechnageNumber}
          onFocus={this.handleFocusNumber}
        />
        <div data-testid="validation-phone-number">{errorNumber} </div>
        <select data-testid="select" onChange={this.handleChangeSelect}>
          {optionArray}
        </select>
      </div>
    );
  }
}
export default TddProcess;
