import React from "react";
import { render } from "@testing-library/react"
import PrivacyPolicyPage from "./PrivacyPolicy";

it("PrivacyPolicy: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<PrivacyPolicyPage />);
});