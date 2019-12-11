import React from "react";
import { useHistory } from 'react-router-dom';

import { Container, Image, Text } from "./styled";

const CategoryCard = ({ image, text }) => {

  const history = useHistory();

  return (
    <Container>
      <Image src={image} alt={text} />
      <Text onClick={()=> history.push('/products')}>{text}</Text>
    </Container>
  );
};

export default CategoryCard;
