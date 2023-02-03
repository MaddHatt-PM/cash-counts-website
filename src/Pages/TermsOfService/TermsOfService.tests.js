import React from "react";
import { render } from "@testing-library/react"
import TermsOfService from "./TermsOfService";

it("PrivacyPolicy: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<TermsOfService />);
});