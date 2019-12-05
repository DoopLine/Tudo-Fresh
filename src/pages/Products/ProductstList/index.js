import React from "react";

import { Container } from "./styled";

import ProductCard from "../../../components/ProductCard";

import products from '../../../data/products';

const ProductsList = () => {
  return (
    <Container>
      {products.map((prod) => ( 
        <ProductCard
          key={prod.id}
          product={prod}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
