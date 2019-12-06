import React from "react";

import { Container, ActionTools, Select } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import Footer from "../../components/Footer";
import ProductstList from "./ProductstList";
import ProductSelectBox from "./ProductSelectBox";

const categoryOptions = [
  { title: "Todas", value: 0 },
  { title: "Charcutaria", value: 1 },
  { title: "Frutas", value: 2 },
  { title: "Legumes", value: 3 }
];

const orderByOptions = [
  { title: "Destaque", value: 0 },
  { title: "Novos", value: 1 },
  { title: "A-Z", value: 2 },
  { title: "Mais baratos", value: 3 },
  { title: "Mais caros", value: 4 },
];

const Products = () => {
  return (
    <Container>
      <InfoWrapper title="Produtos">
        É hora de encher o kubico ou geleira do salo com produtos frescos. As
        ofertas actuais dos produtos TudoFresh deixam todos babados! Ficou
        curioso? Procure aqui os produtos mais frescos e apetitosos que já
        comeste! Não perca!
      </InfoWrapper>
      <ActionTools>
        <ProductSelectBox id="category" title="Categoria" options={categoryOptions} />
        <ProductSelectBox id="orderby" title="Ordenar por" options={orderByOptions} />
      </ActionTools>
      <ProductstList />
      <Footer />
    </Container>
  );
};

export default Products;
