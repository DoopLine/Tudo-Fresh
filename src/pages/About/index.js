import React from "react";

import { Container } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import Footer from '../../components/Footer';
//images 
import aboutImg from '../../assets/images/common/slide_main.jpg';

const About = () => {
  return (
    <Container>
      <InfoWrapper title="Sobre Nós" image={aboutImg}> 
        Quase metade dos alimentos produzidos por agricultores no nosso país nunca é vendido,
        mas consumir alimentos saldaveis tem se tornado muito caro. Este é um ciclo de desperdício
        de alimentos que tem que acabar, e há uma solução simples para este problema. <strong>Tudo Fresh</strong>
      </InfoWrapper>
      <InfoWrapper title="Nosso Propósito"> 
        Quase metade dos alimentos produzidos por agricultores no nosso país nunca é vendido,
        mas consumir alimentos saldaveis tem se tornado muito caro. Este é um ciclo de desperdício
        de alimentos que tem que acabar, e há uma solução simples para este problema. <strong>Tudo Fresh</strong>
      </InfoWrapper>
      <Footer />
    </Container>
  );
};

export default About;
