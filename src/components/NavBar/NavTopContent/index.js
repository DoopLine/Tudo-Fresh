import React from "react";
import { useHistory } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import { Container, Logo, SearchPlaceHolder } from "./styled";

import ActionBox from "../../ActionBox";


const NavTopContent = ({ logoImg, toggleIsSearching }) => {

  const history = useHistory();
  return (
    <Container>
      <Logo src={logoImg} alt="TudoFresh logo brand" onClick={()=> history.push('/')} />
      <SearchPlaceHolder onClick={toggleIsSearching}>
        <p>Pesquisar</p>
        <FiSearch />
      </SearchPlaceHolder>
      <ActionBox text="Nome de Usuário" type="user" title="Usuário" style={{marginLeft: 'auto'}} />
      <ActionBox text="1000" type="cart" inverse={true} title="Carrinho" onClick={()=> history.push('/cart')} />
    </Container>
  );
};

export default NavTopContent;
