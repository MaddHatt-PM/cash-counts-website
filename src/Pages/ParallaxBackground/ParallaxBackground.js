import React, { useEffect, useState } from "react";
import { Container, Image } from "./ParallaxBackground.styles";

import backgroundImage from "../../Assets/Background.jpg"

function ParallaxBackground({ factor = 50, imageAspectRatio = 1 }) {
  const height = 500;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   if (window.DeviceOrientationEvent) {
  //     const handleOrientation = (event) => {
  //       setPosition({ x: event.beta, y: event.gamma });
  //     };
  //     window.addEventListener('deviceorientation', handleOrientation);
  //     return () => {
  //       window.removeEventListener('deviceorientation', handleOrientation);
  //     };
  //   }
  // }, []);

  return (
    <Container height={height} imageAspectRatio={imageAspectRatio}>
      <Image
        src="https://via.placeholder.com/2000x2000"
        extent="10"
        style={{
          transform: `translate(${position.x * (1 / factor)}px, ${position.y * (1 / factor)}px)`,
        }}
      />
    </Container>
  );
};

export default ParallaxBackground;