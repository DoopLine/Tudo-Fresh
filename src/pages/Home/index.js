import React from "react";

import { Container } from "./styled";

import BasketCard from "../../components/BasketCard";
import ProductCard from "../../components/ProductCard";
//Components
import CardWrapper from "./CardWrapper";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";

//Images
import orange from "../../assets/svg/orange.svg";

import cocoImg from "../../assets/images/frutas/COCO.jpg";
import abacateImg from "../../assets/images/frutas/Abacate.jpeg";
import mangaImg from "../../assets/images/frutas/11ss_2048x2048.jpg";
import goiabaImg from "../../assets/images/frutas/20180813061534_9414a8f5b810972c3c9a0e2860c07532_1714799527_img_produtos.jpg";
import maracujaImg from "../../assets/images/frutas/maracuja-cke.jpg";
import melanciaImg from "../../assets/images/frutas/watermelon2.jpg";

const products = [
  { img: cocoImg, title: "Coco", price: 250 },
  { img: abacateImg, title: "Abacate", price: 150 },
  { img: mangaImg, title: "Manga", price: 100 },
  { img: goiabaImg, title: "Goiaba", price: 250 },
  { img: maracujaImg, title: "Maracuja", price: 350 },
  { img: melanciaImg, title: "Melancia", price: 550 }
];

const Home = () => {
  return (
    <Container>
      <SlideShow />
      <CardWrapper title="cesta">
        <BasketCard content={{ img: orange, title: "Cesta Especial" }} />
        <BasketCard content={{ img: orange, title: "Cesta Especial" }} />
        <BasketCard content={{ img: orange, title: "Cesta Especial" }} />
      </CardWrapper>
      <CardWrapper title="destaques" gap={1}>
        {products.map(({ img, price, title }, i) => (
          <ProductCard key={i} title={title} price={price} img={img} />
        ))}
      </CardWrapper>
      <Footer />
    </Container>
  );
};

export default Home;
