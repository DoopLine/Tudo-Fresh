import React from "react";

import { Container, Select } from "./styled";

const ProductSelectBox = ({ id, title, options }) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <Select id={id}>
        {options.map(_o => (
          <option key={_o.value} value={_o.value}>
            {_o.title}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default ProductSelectBox;
