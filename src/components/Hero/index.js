import React from "react";

import { Container } from "./styled";

function Hero({ image, text }) {
  return (
    <Container image={image}>
      <h1>{text}</h1>
    </Container>
  );
}

export default Hero;
