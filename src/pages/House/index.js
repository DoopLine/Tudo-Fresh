import React from "react";

import { Container } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import CardsWrapper from "../../components/CardsWrapper";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

// images
import appleImg from "../../assets/images/common/artistic_apple.jpg";
import stepsImg from "../../assets/images/common/produtor consumidor_Prancheta 1.png";
import heroImg from "../../assets/images/common/cooking.jpg";

import { previewProject as products } from "../../data/products";

const House = () => {
  return (
    <Container>
      <Hero image={heroImg} text="Facilidade e satisfação no cubico" />
      {/* <InfoWrapper title="Facilidade e satisfação no cubico"> */}
      <InfoWrapper
        title="Facilidade e satisfação no cubico"
        image={appleImg}
        alt="Maça"
      >
        Imagine receber das mãos de um produtor as frutas e as hortícolas mais
        frescas em sua casa ou no seu local de trabalho, sem necessidade de
        perder tempo ou de se deslocar. Faça-nos um pedido através da loja
        online, email ou telemóvel e em conjunto com a sua família comprove esta
        realidade.
      </InfoWrapper>

      <InfoWrapper
        title="Do produtor até si, com toda a qualidade"
        image={stepsImg}
        flex={false}
        alt="Processo Produtor Consumidor"
      >
        A tudo fresh faz a ponte entre o local de produção e o consumidor final.
        Privilegiamos frutas da época e os Produtores Nacionais. Visitamos os
        nossos produtores regulamente e acompanhamos as suas produções.
        Acreditamos que só com uma relação estreita com os produtores é possível
        escolher os melhores produtos e aconselhar da melhor forma todos os
        nossos clientes.
      </InfoWrapper>

      <CardsWrapper title="Frutas" gap={1} stretch={true}>
        {products.map(_prod => (
          <ProductCard key={_prod.id} product={_prod} />
        ))}
      </CardsWrapper>

      <Footer />
    </Container>
  );
};

export default House;
