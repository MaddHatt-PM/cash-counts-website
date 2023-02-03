import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: ${props => props.height}px;
  width: calc(100vw * ${({ imageAspectRatio }) => imageAspectRatio});
  overflow: hidden;
`;

export const Image = styled.img`
  overflow-x: hidden;
  position: absolute;
  object-fit: cover;

  top: calc(0% - ${props => props.extent}%); 
  height:calc(100% + ${props => props.extent}%);

  left: calc(0% - ${props => props.extent}%);
  width: calc(100% + ${props => props.extent}%);
  transform: translate(-50%, -50%);
  will-change: transform;
`;