import TddProcess from "./index";
import { render, fireEvent, cleanup, queryByText } from "@testing-library/react";
import React from "react";
describe("should test the form", () => {
  it("should test name fields", () => {
    const renderObject = render(<TddProcess />);
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
    const renderObject = render(<TddProcess />);
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
    const renderObject = render(<TddProcess onChangeSelect={myMock} />);
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

  const renderObject = render(<TddProcess  />);
  const { getByTestId,getByText } = renderObject;
  expect(getByText("August,")).toBeDefined();
  fireEvent.click(getByText("August,"))
  fireEvent.click(getByText("December"))
  expect(getByText("December,")).toBeDefined();
  expect(getByText("2019")).toBeDefined();
  fireEvent.click(getByText("2019"))
 fireEvent.click(getByText("2020"))
  expect(getByText("2020")).toBeDefined();
  fireEvent.click(getByText("December"))
  expect(getByText("December,")).toBeDefined();
 fireEvent.click(getByTestId("next"))
  expect(getByText("January,")).toBeDefined();
  expect(getByText("2021")).toBeDefined();
 })
 
 it("should test the submit button validation ",()=>{
  const renderObject = render(<TddProcess  />);
  const { getByPlaceholderText,getByText } = renderObject;

  fireEvent.click(getByText("BookNow"))
  expect(getByText("please enter the name")).toBeDefined();
  expect(getByText("please enter the 10 digit phone number")).toBeDefined();
  // expect(getByText("please select date")).toBeDefined();
  fireEvent.change(getByPlaceholderText("playerName"),{
    target:{value:"gowthami"}

  })
  fireEvent.click(getByText("BookNow"))
 // expect(getByText("please enter the name")).not.toBeDefined();
  expect(getByPlaceholderText("playerName")).toBeDefined();

 })
});


