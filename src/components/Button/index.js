import React from "react";

import { Container } from "./styled";

const Button = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default Button;
