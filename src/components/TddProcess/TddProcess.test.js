import TddProcess from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
describe("should test the form", () => {
  const myMock = jest.fn();
  it("should test name fields", () => {
    const renderObject = render(<TddProcess />);
    const { getByTestId } = renderObject;
    fireEvent.focus(getByTestId("name"));
    expect(getByTestId("validation-name").innerHTML).toBe(
      "please enter the name "
    );
  });
});
