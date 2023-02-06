import styled from "styled-components";


export const Container = styled.div.attrs(props => (
  {
    style: {
      width: `${props.width}px`,
      marginLeft: `${props.leftMargin}em`,
      marginRight: `${props.rightMargin}em`,
    },
  }))`
  height: 500px ;
  border-radius: 16px;
  background-color: rgba(228, 223, 245, 0.227);
  box-shadow: inset 0 0 400px #311c5f13, inset 0 0 2px #eae2e27e, 0 0 24px #0000007c;

  backdrop-filter: blur(40px);
`;

export const Viewport = styled.div`
  padding: 1em;
`;

export const GetOnAppStoreBadge = styled.img`
  position: absolute;
  bottom: 1em;
  left: 100%;
  transform: translateX(calc(-100% - 1em));
`;

export const QRCodeElement = styled.img`
  position: absolute;
  bottom: 1em;
  left: 0;
  transform: translateX(1em);
  border-radius: 4px;
  width: 100px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  /* margin-bottom: -0.75em; */
`;

export const AppIcon = styled.img`
  position: relative;
  width: max(32px, min(18%, 70px));
  height: max(32px, min(18%, 70px));
  margin-right: 0.75em;
  filter: drop-shadow(0 1px 4px #26202e3b);
`;

export const H1 = styled.h1`
  color: #f6f2f8;
  text-shadow: 0 1px 4px #26202e3b;
  font-size: 2em;
  line-height: 0;

  @media (max-width: 750px) {
    font-size: 1.5em;
  }
`;

export const P = styled.p`
  color: #f9f3fc;
  text-shadow: 0 0.5px 1px #26202e42;

    @media (max-width: 750px) {
    font-size: 0.9em;
  }
`;

export const MiniTitle = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-weight: 600;
  
  color: #f9f3fc;
  font-size: 1em;
  margin-bottom: 1em;

  @media (max-width: 750px) {
    font-size: 0.75em;
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid #040a1d;
  margin-top: 1em;
  margin-bottom: 1em;
  opacity: 0.25;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
  `;

export const GridItem = styled.div.attrs(props => (
  {
    style: {
      width: `25%`,
    }
  }))`
  margin-top: 0.5em;
  text-align: center;
  color: #f9f3fc;
  text-shadow: 0 0.5px 1px #26202e42;
  @media (max-width: 750px) {
    font-size: 0.75em;
  }
`;

export const GridEmoji = styled.p`
  text-shadow: 0 0.5px 1px #26202e42;
  font-size: 2em;
  margin: 0;
  line-height: 0.25em;
  margin-bottom: 0.3em;

    @media (max-width: 750px) {
    font-size: 2em;
  }
`