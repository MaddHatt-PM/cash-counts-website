import styled from "styled-components";

export const Image = styled.img.attrs(props => (
  {
    style: {
      height: `${props.height}vh`,
      transform: `translate(0, ${props.heightOffset}vh)`,
    }
  }
))`

`;
