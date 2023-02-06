import React from "react";
import { render } from "@testing-library/react"
importAppPreviewfrom "./AppPreview";

it("AppPreview: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<AppPreview/>);});