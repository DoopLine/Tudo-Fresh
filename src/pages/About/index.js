import React from "react";

import { Container } from "./styled";

import InfoWrapper from "../../components/InfoWrapper";
import Footer from "../../components/Footer";
//images
import aboutImg from "../../assets/images/common/slide_main.jpg";

const About = () => {
	return (
		<Container>
			<InfoWrapper title='Sobre Nós' image={aboutImg}>
				A <strong>Tudofresh</strong> é uma marca de produtos agrícolas que tem para o
				cliente, o melhor da alimentação saudável. O que nos ajuda a trazer os melhores
				produtos até ao cliente é o facto de que entramos em contacto
				directo com produtores que têm como paixão o seu serviço. Os
				produtos passam por um processo cuidadoso de triagem e
				higienização; e finalmente a distribuição para os diferentes
				pontos de venda.
			</InfoWrapper>
			<Footer />
		</Container>
	);
};

export default About;
