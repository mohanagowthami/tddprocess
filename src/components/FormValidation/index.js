import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import Calendar from "./calendar.js"
import {FlexContainer,Input,Div} from "./styleComponents"

@observer
class FormValidation extends Component {
  @observable playerName = "";
  @observable playerPhoneNumber = "";
  @observable isFocus = undefined;
  @observable isFocusPhoneNumber = undefined;
  @observable validation=false;
  @observable startDate= new Date();
  handleChangeDate=(date)=>
  {
    console.log("date",date);
    this.startDate=date;
  }

  handlechnage = e => {
    this.playerName = e.target.value;
  };

  handleFocus = () => {
    this.isFocus = this.isFocus === undefined ? true : !this.isFocus;
  };
  handlechnageNumber = e => {
    this.playerPhoneNumber = e.target.value;
  };

  handleFocusNumber = () => {
    this.isFocusPhoneNumber =
      this.isFocusPhoneNumber === undefined ? true : !this.isFocusPhoneNumber;
  };
  handleFocus = () => {
    this.isFocus = this.isFocus ===undefined ? true : !this.isFocus;
  };
  handleChangeSelect = e => {
    this.props.onChangeSelect(e.target.value);
  };

  validationForm=()=>
  {
   this.validation=true;

  }

  render() {
    const error =
      (this.playerName === "" && this.isFocus === false) ||(this.playerName===""&&this.validation===true) ? "please enter the name" : "";
   const errorNumber =
      (this.playerPhoneNumber.length < 10 && this.isFocusPhoneNumber ===false)||(this.playerPhoneNumber===""&&this.validation===true)
        ? "please enter the 10 digit phone number"
        : "";
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];
    const optionArray = numbers.map(number => {
      return <option value={number} key={number}> {number}</option>;
    });
    
    return (
      <FlexContainer>
        
        <Input
        placeholder="name"
          type="text"
          data-testid="name"
          onBlur={this.handleFocus}
          onChange={this.handlechnage}
          onFocus={this.handleFocus}
        />
        
        
        <div data-testid="validation-name">{error} </div>
        <Input
          type="text"
          data-testid="phone-number"
          onBlur={this.handleFocusNumber}
          onChange={this.handlechnageNumber}
          onFocus={this.handleFocusNumber}
        /><div data-testid="validation-phone-number">{errorNumber} </div>
        <select data-testid="select" onChange={this.handleChangeSelect}>
          {optionArray}
        </select>
        <Div>
        <DatePicker
    selected={this.startDate}
    onChange={this.handleChangeDate}
    dateFormat="MMMM d, yyyy "
    placeholder="calendar"
    
/>
        </Div>
      <button onClick={this.validationForm}>BookNow</button>
       </FlexContainer>
    );
  }
}
export default FormValidation