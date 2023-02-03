import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: auto auto;
  margin-bottom: 200px;

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap');
`;

export const H1 = styled.h1`
  margin: 0;
  margin-top: 1em;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 3em;
  letter-spacing: -2px;
  text-align: center;

`;

export const Detail = styled.p`
  margin: 0;
  margin-bottom: 1em;
  text-align: center;
`;

export const Divider = styled.hr`
  border-top: 0px solid black;
  margin-top: 1em;
  margin-bottom: 2em;
`;

export const H2 = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2em;
  margin: 0;
  margin-top: 1em;
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  
  margin: 0;
  margin-top: ${props => props["no-top-margin"] ?? false ? 0 : 2}em;
`;

export const H4 = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  margin: 0;
  margin-top: 2em;
`;

export const H5 = styled.h5`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  margin: 0;
`;


export const P = styled.p`
  margin: 0;
  margin-top: ${props => props.index === 0 ? 0 : 2}em;
`;

export const Box = styled.div`
  width: 95%;
  margin: auto auto;
  height: fit-content;
  padding: 0px 16px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const UL = styled.ul`
display: list-item;
  padding: 0;
  margin: 0;
  margin-left: 3em;
  margin-top: 0.25em;
`;