import React from "react";

import { Container, ActionTools, Select } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import Footer from "../../components/Footer";
import ProductstList from "./ProductstList";


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
        <label htmlFor="filter-by">ordenado por</label>
        <Select id="filter-by">
          <option value="filter">Relevância</option>
          <option value="filter">A-Z</option>
          <option value="filter">Novos</option>
          <option value="filter">Mais Baratos</option>
          <option value="filter">Mais Caros</option>
        </Select>
      </ActionTools>
      <ProductstList />
      <Footer />
    </Container>
  );
};

export default Products;
