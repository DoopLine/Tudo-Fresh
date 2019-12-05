import React from "react";
import {useParams} from 'react-router-dom';

import { Container, DetailWrapper, ImageWrapper } from "./styled";

import Button from "../../../components/Button";

import products from '../../../data/products';

const ProductDetail = () => {
  const {id: productId} = useParams();
  
  const product = products.find( _p => _p.id === productId);

  const { img, title, price } = product;

  return (
    <Container>
      <ImageWrapper>
        <img className="flex-img" src={img} alt={title} />
      </ImageWrapper>
      <DetailWrapper>
        <h1 style={{ width: "80%" }}>{title}</h1>
        <h5>Descrição</h5>
        <p>
          There are a few reasons. First, you’re helping the earth in a very
          powerful way. Global food waste generates 3.3 billion tons of carbon
          dioxide annually, making it one of the single biggest contributors to
          planet-harming emissions.
        </p>
        <span style={{ display: "flex", alignItems: 'center' }}>
          <h5 style={{ marginRight: ".5rem" }}>Preço</h5>
          <p>{price} kz</p>
        </span>
        <Button>Adicionar a cesta</Button>
      </DetailWrapper>
    </Container>
  );
};

export default ProductDetail;
