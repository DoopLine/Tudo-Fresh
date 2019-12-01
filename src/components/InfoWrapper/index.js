import React from "react";

import { Container } from "./styled";

const InfoWrapper = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{children}</p>
    </Container>
  );
};

export default InfoWrapper;
