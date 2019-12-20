import React from "react";

import { Container } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import CardsWrapper from "../../components/CardsWrapper";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

// images
import fruitsBasketImg from "../../assets/images/common/fruits_basket.jpg";
import holdingGrapesImg from "../../assets/images/common/holding_grapes.jpg";
import heroImg from "../../assets/images/common/cooking.jpg";

import { previewProject as products } from "../../data/products";

const House = () => {
  return (
    <Container>
      <Hero image={heroImg} text="Satisfação no Cubico" />
      {/* <InfoWrapper title="Facilidade e satisfação no cubico"> */}
      <InfoWrapper
        title="Satisfação no cubico"
        image={fruitsBasketImg}
        alt="laranjeira"
      >
        Imagine receber das mãos de um produtor as frutas e as hortícolas mais
        frescas em sua casa. Faça-nos um pedido através da loja
        online, email ou telemóvel e em conjunto com a sua família comprove esta
        realidade.
      </InfoWrapper>

      <InfoWrapper
        title="Do produtor até si, com toda a qualidade"
        image={holdingGrapesImg}
        alt="Processo Produtor Consumidor"
        reverse={true}
        // cover={false}
      >
        A Tudofresh faz a ponte entre o local de produção e o consumidor final.
        Privilegiamos frutas da época e os Produtores Nacionais.
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
