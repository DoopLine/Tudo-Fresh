import React from "react";

import { Container } from "./styled";

import BasketCard from "../../components/BasketCard";
import ProductCard from "../../components/ProductCard";
//Components
import CardsWrapper from "../../components/CardsWrapper";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";

import {previewProject as products} from "../../data/products";
//Images
import orange from "../../assets/svg/orange.svg";

const Home = () => {
  return (
    <Container>
      <SlideShow />
      <CardsWrapper title="cesta">
        <BasketCard
          content={{ img: orange, title: "Cesta Especial" }}
          goTo="/cart"
        />
        <BasketCard
          content={{ img: orange, title: "Cesta Especial" }}
          goTo="/cart"
        />
        <BasketCard
          content={{ img: orange, title: "Cesta Especial" }}
          goTo="/cart"
        />
      </CardsWrapper>
      <CardsWrapper title="destaques" gap={1} stretch={true}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </CardsWrapper>
      <Footer />
    </Container>
  );
};

export default Home;
