import React from "react";
import { render } from "@testing-library/react"
importInfoBoxfrom "./InfoBox";

it("InfoBox: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<InfoBox/>);});