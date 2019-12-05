import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";

import { Container } from "./styled";

const ActionBox = ({ type, text, inverse = false, title, style, onClick }) => {
  return (
    <Container inverse={inverse} title={title} style={style} onClick={onClick}>
      <p className="truncate">{text}</p>
      {type === "user" ? <FiUser /> : <FiShoppingCart />}
    </Container>
  );
};

export default ActionBox;
