import React from "react";
// import {FaFacebookSquare, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import {
  Container,
  Column,
  ColumnItem,
  ColumnList,
  ColumnTitle
} from "./styled";

const info = [
  { title: "Ajuda", list: ["Serviço de apoio ao cliente", "Mapa do site"] },
  {
    title: "Informações Úteis",
    list: [
      "Termos de utilização",
      "Privacidade e cookies",
      "Burlas de franchising"
    ]
  },
  {
    title: "No Interior da TudoFresh",
    list: ["Sobre nós", "Clientes", "Emprego na TudoFresh"]
  }
];

const FooterTop = () => {
  return (
    <Container>
      {info.map((_if, i) => (
        <Column key={i}>
          <ColumnTitle>{_if.title}</ColumnTitle>
          <ColumnList>
            {_if.list.map((_item, i) => (
              <ColumnItem key={i}> <a href="/legal" >{_item}</a></ColumnItem>
            ))}
          </ColumnList>
        </Column>
      ))}
    </Container>
  );
};

export default FooterTop;
