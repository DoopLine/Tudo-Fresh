import React from "react";
import { useHistory } from "react-router-dom";
import { FiEdit, FiPower, FiInbox, FiChevronRight } from "react-icons/fi";

import {
  Container,
  Header,
  Avatar,
  InfoList,
  Actions,
  ActionItem,
  Purchases,
  MainContent
} from "./styled";

//Images
import userImg from "../../assets/images/common/denilson.jpg";

const User = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <Avatar src={userImg} alt="user photo" />
        <p>Denilson Costa</p>
        <InfoList>
          <li>Email: denilson2770@gmail.com</li>
          <li>Compras Feitas: 0</li>
          <li>Nome de Usuário: denilson.2770</li>
        </InfoList>
      </Header>
      <MainContent>
      <Actions>
        <ActionItem>
          <FiEdit />
          Editar Conta
          <FiChevronRight />
        </ActionItem>
        <ActionItem>
          <FiInbox />
          Notificações
          <FiChevronRight />
        </ActionItem>
        <ActionItem onClick={() => history.push("/signin")}>
          <FiPower />
          Terminar Sessão
          <FiChevronRight />
        </ActionItem>
      </Actions>
      <Purchases>
          <li>O seu Histórico de compras aparecerá aqui</li>
      </Purchases>

      </MainContent>
    </Container>
  );
};

export default User;
