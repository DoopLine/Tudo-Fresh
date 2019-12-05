import React from "react";

import { Container, TextWapper } from "./styled";

const InfoWrapper = ({ title, children, image, alt, flex = true }) => {
  return (
    <Container hasImg={!!image} flex={flex}>
      <TextWapper hasImg={!!image}>
        <h1>{title}</h1>
        <p>{children}</p>
      </TextWapper>
      {image && <img className="flex-img" src={image} alt={alt}/>}
    </Container>
  );
};

export default InfoWrapper;
