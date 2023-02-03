import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 500px;
  width: calc(100vw * ${({ imageAspectRatio }) => imageAspectRatio});
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: -15%;
  left: -15%;
  width: 130%;
  height: 130%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  will-change: transform;
`;