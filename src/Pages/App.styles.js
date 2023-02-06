import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top:0em;
  left:0;
  height: 100%;
  width: 100%;
  z-index: -10;
  background-color: #17151a;
`;

export const ScrollView = styled.div`
  position: absolute;
  /* top:3em; */
  left:0;
  right:0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #d8d8e6;
`;