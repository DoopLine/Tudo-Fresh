import React from "react";

import { Container } from "./styled";

import BasketCard from "../../components/BasketCard";
import ProductCard from "../../components/ProductCard";
//Components
import CardsWrapper from "../../components/CardsWrapper";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";
import CategoriesList from "./CategoriesList";
import ImageGrid from '../../components/ImageGrid';

import {previewProject as products} from "../../data/products";
//Images
import orange from "../../assets/svg/orange.svg";

const Home = () => {
  return (
    <Container>
      <SlideShow />
      <CardsWrapper title="cestas" center={true}>
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
      <CategoriesList />
      <ImageGrid />
      <Footer />
    </Container>
  );
};

export default Home;
