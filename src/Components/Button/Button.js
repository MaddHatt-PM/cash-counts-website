import React from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ text, color = "", callback }) => {

  return (
    <Wrapper buttonColor={color} type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default Button;