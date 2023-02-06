import styled from "styled-components";

export const Container = styled.div`
  width: min(95%, 900px);
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
  text-align: center;
  text-shadow: 0 1px 2px #2e27331c;
  letter-spacing: -2px;

  color: #5b54bc;
`;

export const Detail = styled.p`
  margin: 0;
  margin-bottom: 1em;

  text-align: center;
`;

export const Divider = styled.hr`
  margin-top: 1em;
  margin-bottom: 2em;

  border-top: 0px solid black;
`;

export const H2 = styled.h2`
  margin: 0;
  margin-top: 1em;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2em;

  color: #5b54bc;
`;

export const H3 = styled.h3`
  margin: 0;
  margin-top: ${props => props["no-top-margin"] ?? false ? 0 : 2}em;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
`;

export const H4 = styled.h4`
  margin: 0;
  margin-top: 2em;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
`;

export const H5 = styled.h5`
  margin: 0;

  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.25em;
`;


export const P = styled.p`
  margin: 0;
  margin-top: ${props => props.index === 0 ? 0 : 2}em;
`;

export const Box = styled.div`
  width: 95%;
  height: fit-content;
  margin: auto auto;
  padding: 0px 16px;

  border: 1px solid black;
  border-radius: 4px;
`;

export const UL = styled.ul`
  margin: 0;
  margin-left: 3em;
  margin-top: 0.25em;
  margin-bottom: 2em;
  padding: 0;

  display: list-item;
`;

export const A = styled.a`
  color: #5b54bc;
`;