import React from "react";
import { useHistory } from "react-router-dom";
import useToogle from "../../hooks/useToggle";

import {
  Container,
  CardArrow,
  CardImage,
  CardContent,
  CardTitle,
  CardDesc,
  CardButton
} from "./styled";

const BasketCard = ({ content, goTo = "" }) => {
  const history = useHistory();
  const { img, title } = content;

  const [isExpanded, toggleIsExpanded] = useToogle();

  const handleClickButton = () => (isExpanded ? history.push(goTo) : null);

  return (
    <Container expand={isExpanded} onClick={toggleIsExpanded}>
      <CardImage expand={isExpanded} src={img} alt={title} />
      <CardContent expand={isExpanded}>
        <CardTitle>{title}</CardTitle>
        <CardDesc>
          Esta cesta é ideal para quem deseja ter as melhores frutas e outros.
        </CardDesc>
      </CardContent>
      <CardButton expand={isExpanded} onClick={handleClickButton}>
        <p>Adicionar ao carrinho</p>
        <CardArrow
          expand={isExpanded}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            strokeWidth="5"
          />
        </CardArrow>
      </CardButton>
    </Container>
  );
};

export default BasketCard;
