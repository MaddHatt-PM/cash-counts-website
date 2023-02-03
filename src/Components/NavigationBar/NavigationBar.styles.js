import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  /* display: flex; */

  /* padding: 0.5em; */
  width: 100%;
  height: ${props => props.height};
  
  background-color: rgba(207, 207, 228, 0);
  box-shadow: 0 2px 0 #ffffff1f;
  `;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 32px; */
  height: 100%;
  width: 100%;
`

export const Spacer = styled.div`
  height: ${props => props.height};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`;

export const Title = styled.a`
  color: rgb(61, 59, 59);
  font-size: x-large;
`