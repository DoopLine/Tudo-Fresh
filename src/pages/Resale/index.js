import React from "react";

import { Container, IntroSection, StepsSection } from "./styled";

import Hero from "../../components/Hero";
// import InfoWrapper from "../../components/InfoWrapper";
import Footer from "../../components/Footer";

// Images
import heroImg from "../../assets/images/common/serving_tray.jpg";

const resaleSteps = [
  {
    title: "Simplificar",
    itens: ["Um só fornecedor", "Uma só factura", "Tratamos da reposição"]
  },
  {
    title: "Acompanhar",
    itens: [
      "Proporcionamos sessões de degustação",
      "Disponibilizamos material de apoio",
      "Propomos campanhas promocionais.",
      "Visitamos regularmente o seu estabelecimento."
    ]
  },
  {
    title: "Economizar",
    itens: [
      "Combustível e tempo nas suas deslocações",
      "Tempo que demora a fazer as suas compras e a repor os seus produtos"
    ]
  }
];

const Resale = () => {
  return (
    <Container>
      <Hero
        image={heroImg}
        text="Experimente o serviço de revenda Tudo Fresh"
      />
      <IntroSection>
        <h4>A Tudo Fresh tem condições especiais si.</h4>
        <p>Se está responsável pela gestão de um(a):</p>
        <ul>
          <li>Escola</li>
          <li>Hotel</li>
          <li>Instituição</li>
          <li>Mercearia ou mini-mercado</li>
          <li>Restaurante</li>
          <li>Outros estabelecimento comercial</li>
        </ul>
        <p>
          Com a Tudo Fresh ganhe mais tempo para o seu estabelecimento e
          principalmente ganhe tempo para dedicar aos seus clientes.
        </p>
      </IntroSection>
      <StepsSection>
        <h4>O nosso serviço de Revenda permite:</h4>
        {resaleSteps.map(({ title, itens }, i) => (
          <ul key={i}>
            <li>{title}</li>
            {itens.map((item, ii) => (
              <li key={ii}>{item}</li>
            ))}
          </ul>
        ))}
      </StepsSection>
      <Footer />
    </Container>
  );
};

export default Resale;
