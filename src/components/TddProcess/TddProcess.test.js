import TddProcess from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
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
});
