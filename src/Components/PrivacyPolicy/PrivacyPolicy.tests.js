import React from "react";
import { render } from "@testing-library/react"
importPrivacyPolicyfrom "./PrivacyPolicy";

it("PrivacyPolicy: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<PrivacyPolicy/>);});