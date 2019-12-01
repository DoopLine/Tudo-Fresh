import React from "react";

import { Container } from "./styled";

import CartProductCard from "../CartProductCard";

// images
import mangaImg from "../../../assets/images/frutas/11ss_2048x2048.jpg";
import abacateImg from "../../../assets/images/frutas/Abacate.jpeg";

const products = [
  { img: mangaImg, title: "Manga", price: 100 },
  { img: abacateImg, title: "Abacate", price: 150 }
];

const CartProducts = () => {
  return (
    <Container>
      {products.map((_p, i) => (
        <CartProductCard key={i} product={_p} />
      ))}
    </Container>
  );
};

export default CartProducts;
