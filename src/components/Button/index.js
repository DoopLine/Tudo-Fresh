import React from "react";

import { Container } from "./styled";

const Button = ({ children, style, type = 'button' }) => {
  return <Container style={style} type={type}>{children}</Container>;
};

export default Button;
