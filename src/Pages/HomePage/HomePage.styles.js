import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const VCentered = styled.div`
  position: fixed;
  top: 2em;
  left: 0;
  height: 100vh;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: none;
`

export const HCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`

export const Screenshot = styled.img`
  /* transform: translate(0, -2vh); */
  height: 95vh;
`

export const StickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Group = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`