import styled from "styled-components";

export const Wrapper = styled.button`
  cursor: pointer;
  
  padding: 10px 32px;
  margin: 8px 4px;
  border-radius: 6px;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.outlineColor};
  background: ${props => props.theme.fillColor};
  transition: background-color 125ms;
  color: ${props => props.theme.textColor};

  &:hover {
    /* background: rgba(70, 68, 79, 0.5); */
    background: ${props => props.theme.hoverColor};
  }

  &:active {
    background: ${props => props.theme.selectionColor};
  }
`;

Wrapper.defaultProps = {
  theme: {
    borderWidth: "1px",
    outlineColor: "rgb(152, 137, 223)",
    fillColor: "rgb(152, 137, 223)",
    hoverColor: "rgb(141, 123, 230)",
    selectionColor: "rgb(117, 96, 223)",
    textColor: "rgb(245, 240, 248)"
  }
}