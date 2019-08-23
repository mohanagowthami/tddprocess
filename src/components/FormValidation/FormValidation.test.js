import FormValidation from "./index";
import { render, fireEvent, cleanup, queryByText } from "@testing-library/react";
import React from "react";
import DatePicker from "react-datepicker";
describe("should test the form", () => {
  it("should test name fields", () => {
    const renderObject = render(<FormValidation />);
    const { getByPlaceholderText,getByText,queryByText} = renderObject;
    fireEvent.focus(getByPlaceholderText("name"));
    expect(queryByText("please enter the name")).toBeNull();
    fireEvent.blur(getByPlaceholderText("name"));
    expect(getByText("please enter the name")).toBeDefined();
    fireEvent.change(getByPlaceholderText("name"), { target: { value: "12" } });
    expect(queryByText("please enter the name")).toBeNull();
    
  });

  it("should test phone number fields", () => {
    const renderObject = render(<FormValidation />);
    const { getByPlaceholderText,queryByText } = renderObject;
    fireEvent.focus(getByPlaceholderText("phone number"));
    expect(queryByText("please enter the 10 digit phone number ")).toBeNull();
    fireEvent.blur(getByPlaceholderText("phone number"));
    expect(queryByText("please enter the 10 digit phone number")).not.toBeNull();
    
    fireEvent.change(getByPlaceholderText("phone number"), { target: { value: "12" } });
    expect(queryByText("please enter the 10 digit phone number")).not.toBeNull();
    
    fireEvent.change(getByPlaceholderText("phone number"), {
      target: { value: "9989984350" }
    });
    expect(queryByText("please enter the 10 digit phone number ")).toBeNull();
    
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
  const renderObject2 = render(<DatePicker  />);
  expect(renderObject2).toBeDefined();
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


