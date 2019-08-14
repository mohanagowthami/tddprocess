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

  it("should test name fields", () => {
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

  it(" should test the drop down box", () => {
    const renderObject = render(<TddProcess />);
    const { getByTestId } = renderObject;
    fireEvent.change(getByTestId("select"), {
      target: { value: 1 }
    });
    expect(getByTestId("select".innerHTML)).toBe(1);
  });
});
