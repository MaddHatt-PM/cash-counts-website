import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const VCentered = styled.div`
  position: fixed;
  top: calc(50% - 275px);
  left: 0;
  height: 550px;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: none;
`;

export const HCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const Screenshot = styled.img`
  transform: translate(0, -2vh);
  height: 95vh;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2em;
  margin-right: 2em;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    
    ${Group} {
      flex-direction: column-reverse;
      margin: 0;

      * {
        margin-bottom: 0.25em;
      }
    }
  }
`;

export const P = styled.p`
  color: rgba(155, 142, 163, 0.685);
  font-size: smaller;
`;

export const A = styled.a`
  color: rgba(155, 142, 163, 0.685);
  
  &:hover {
    color: rgb(99, 97, 216);

  }
`;
