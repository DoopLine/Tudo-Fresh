import React from "react";

import { Container, Content, Header } from "./styled";

const CardWrapper = ({ children, title, gap = 2, stretch= false }) => {
  return (
    <Container>
      <Header stretch={stretch}>
        <h3>{title}</h3>
        <a href="*">Ver mais</a>
      </Header>
      <Content marginRight={gap} stretch={stretch}>
        {children}
        <span style={{ opacity: 0 }}>lo</span>
      </Content>
    </Container>
  );
};

export default CardWrapper;
