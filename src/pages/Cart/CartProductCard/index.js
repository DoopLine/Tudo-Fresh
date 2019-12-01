import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  Container,
  ImageWrapper,
  InfoWrapper,
  ActionWrapper,
  XButton
} from "./styled";

const CartProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <Container>
      <ImageWrapper>
        <img className="flex-img" src={img} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <h4>{title}</h4>
        <span>
          <p>Preço</p>
          <p>{price} kz/kg</p>
        </span>
      </InfoWrapper>
      <ActionWrapper>
        <span>
          <FiMinusCircle />
          <p>0</p>
          <FiPlusCircle />
          <XButton>
            <AiFillCloseCircle />
          </XButton>
        </span>
        <span>
          <p>1.000 kz/total</p>
        </span>
      </ActionWrapper>
    </Container>
  );
};

export default CartProductCard;
