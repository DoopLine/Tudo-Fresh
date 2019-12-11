import React from "react";

import { Container, List, Title } from "./styled";

import CategoryCard from "./CategoryCard";
//Images
import frutasImg from "../../../assets/images/common/tijela_frutas.jpg";
import legumesImg from "../../../assets/images/common/legumes.jpg";
import charcutariaImg from "../../../assets/images/charcutaria/charcutaria.jpg";

const cards = [
  { text: "Frutas", image: frutasImg },
  { text: "Legumes", image: legumesImg },
  { text: "Charcutaria", image: charcutariaImg }
];

const CategoriesList = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <List>
        {cards.map(_c => (
          <CategoryCard key={_c.text} image={_c.image} text={_c.text} />
        ))}
      </List>
    </Container>
  );
};

export default CategoriesList;
