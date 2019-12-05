import React from "react";
import { useHistory } from "react-router-dom";
// import useToggle from "../../hooks/useToggle";

import teste from "../../assets/images/common/slide_main.jpg";

import {
  Container,
  Content,
  Image,
  Buttons,
  PriceText,
  ImageWrapper
} from "./styled";

import Button from "../Button";
// import ProductDetail from "../../pages/Products/ProductDetail";
// import Modal from "../Modal";

const ProductCard = ({ product }) => {
  const { title, img, price, id } = product;
  const history = useHistory();

  const handleOpenModal = () => {
    history.push(`/products/${id}`);
  };

  return (
    <Container tabIndex="0">
      {/* End */}
      <ImageWrapper onClick={handleOpenModal}>
        <Image src={img || teste} alt={title} title={title} />
      </ImageWrapper>
      <Content>
        <p style={{ fontSize: ".8rem" }}>{title || "teste"}</p>
        <Buttons>
          <Button>Adicionar</Button>
          <PriceText>{price || "1.000.000,00"} kz</PriceText>
        </Buttons>
      </Content>
    </Container>
  );
};

export default ProductCard;
