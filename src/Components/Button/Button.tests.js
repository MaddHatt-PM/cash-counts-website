import React from "react";
import { render } from "@testing-library/react"
importButtonfrom "./Button";

it("Button: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<Button/>);});