import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  margin: auto auto;
  margin-bottom: 200px;

`;

export const H1 = styled.h1`
  margin: 0;
  margin-top: 1em;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 3em;
  letter-spacing: -2px;
  text-align: center;
  color: rgb(35, 34, 37);
`;

export const Detail = styled.p`
  margin: 0;
  margin-bottom: 1em;
  text-align: center;
  color: rgba(108, 102, 119, 0.653);
`;

export const Divider = styled.hr`
  border-top: 0px solid black;
`;

export const H2 = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2em;
  margin: 0;
  margin-top: 1em;
  color: #343337;
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  
  margin: 0;
  margin-top: ${props => props["no-top-margin"] ?? false ? 0 : 2}em;
  color: rgb(50, 49, 52);
`;

export const P = styled.p`
  margin: 0;
  margin-top: ${props => props.index === 0 ? 0 : 1}em;
  color: rgb(58, 57, 60);
`;


export const UL = styled.ul`
display: list-item;
  padding: 0;
  margin: 0;
  margin-left: 3em;
  margin-top: 0.25em;
`;