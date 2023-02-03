import styled from "styled-components";

export const Wrapper = styled.button`
  cursor: pointer;
  
  padding: 6px 32px;
  margin: 8px 4px;
  border-radius: 6px;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.outlineColor};
  background: ${props => props.theme.fillColor};
  transition: background-color 125ms;
  color: ${props => props.theme.textColor};

  &:hover {
    /* background: rgba(70, 68, 79, 0.5); */
    background: ${props => props.theme.hoverColor};
    color: ${props => props.theme.textHoverColor};
}

&:active {
  background: ${props => props.theme.selectionColor};
  color: white;
  }
`;

Wrapper.defaultProps = {
  theme: {
    borderWidth: "1px",
    outlineColor: "rgba(151, 137, 223, 0)",
    fillColor: "rgba(238, 85, 238, 0)",
    hoverColor: "rgb(141, 123, 230)",
    selectionColor: "rgb(87, 85, 213)",
    textColor: "rgba(63, 58, 66, 0.685)",
    textHoverColor: "rgb(240, 233, 243)"
  }
}