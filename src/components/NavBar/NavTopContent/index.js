import React from "react";
import { FiSearch } from 'react-icons/fi';

import { Container, Logo, SearchPlaceHolder } from "./styled";

import ActionBox from "../../ActionBox";


const NavTopContent = ({ logoImg, toggleIsSearching }) => {
  return (
    <Container>
      <Logo src={logoImg} alt="TudoFresh logo brand" />
      <SearchPlaceHolder onClick={toggleIsSearching}>
        <p>Pesquisar</p>
        <FiSearch />
      </SearchPlaceHolder>
      <ActionBox text="Nome de Usuário" type="user" title="Usuário" style={{marginLeft: 'auto'}} />
      <ActionBox text="1000" type="cart" inverse={true} title="Carrinho" />
    </Container>
  );
};

export default NavTopContent;
