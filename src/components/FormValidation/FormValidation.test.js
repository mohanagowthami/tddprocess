import FormValidation from "./index";
import { render, fireEvent, cleanup, queryByText } from "@testing-library/react";
import React from "react";
import DatePicker from "react-datepicker";
describe("should test the form", () => {
  it("should test name fields", () => {
    const renderObject = render(<FormValidation />);
    const { getByTestId } = renderObject;
    fireEvent.focus(getByTestId("name"));
    expect(getByTestId("validation-name").innerHTML).toBe(" ");
    fireEvent.blur(getByTestId("name"));
    expect(getByTestId("validation-name").innerHTML).toBe(
      "please enter the name "
    );
    fireEvent.change(getByTestId("name"), { target: { value: "12" } });
    expect(getByTestId("validation-name").innerHTML).toBe(" ");
  });

  it("should test phone number fields", () => {
    const renderObject = render(<FormValidation />);
    const { getByTestId } = renderObject;
    fireEvent.focus(getByTestId("phone-number"));
    expect(getByTestId("validation-phone-number").innerHTML).toBe(" ");
    fireEvent.blur(getByTestId("phone-number"));
    expect(getByTestId("validation-phone-number").innerHTML).toBe(
      "please enter the 10 digit phone number "
    );
    fireEvent.change(getByTestId("phone-number"), { target: { value: "12" } });
    expect(getByTestId("validation-phone-number").innerHTML).toBe(
      "please enter the 10 digit phone number "
    );
    fireEvent.change(getByTestId("phone-number"), {
      target: { value: "9989984350" }
    });
    expect(getByTestId("validation-phone-number").innerHTML).toBe(" ");
  });

  it(" should test the selecting the number of people in drop down box and it is call back with same value or not", () => {
    const myMock = jest.fn();
    const renderObject = render(<FormValidation onChangeSelect={myMock} />);
    const { getByTestId } = renderObject;
    const numberOfPlayers = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "10+"
    ];
    numberOfPlayers.forEach(element => {
      fireEvent.change(getByTestId("select"), {
        target: { value: element }
      });
      expect(myMock).toHaveBeenCalled();
    });
  });
 it(" should test the calendar field in the form",()=>
 {
  const renderObject = render(<FormValidation  />);
  const { getByPlaceholderText,getByText } = renderObject;
  console.log("renderobject",renderObject);
  const renderObject2 = render(<DatePicker  />);
  expect(renderObject2).toBeDefined();
      

  ;
 })
 
 it("should test the submit button validation ",()=>{
  const renderObject = render(<FormValidation  />);
  const { getByPlaceholderText,getByText } = renderObject;
  fireEvent.click(getByText("BookNow"))
  expect(getByText("please enter the name")).toBeDefined();
  expect(getByText("please enter the 10 digit phone number")).toBeDefined();
  fireEvent.change(getByPlaceholderText("name"),{
  target:{value:"gowthami"}})
  fireEvent.click(getByText("BookNow"))
  expect(getByPlaceholderText("name")).toBeDefined();
})
});


