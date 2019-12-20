import React from "react";

import { Container } from "./styled";

import Hero from "../../components/Hero";
import InfoWrapper from "../../components/InfoWrapper";
import Footer from "../../components/Footer";

// Images
import heroImg from "../../assets/images/common/serving_tray.jpg";
import packedLunchImg from "../../assets/images/common/packed_lunch.jpg";
import handshakeImg from "../../assets/images/common/handshake.jpg";

const Office = () => {
	return (
		<Container>
			<Hero
				image={heroImg}
				text='Excelentes planos para a sua empresa'
			/>
			<InfoWrapper
				title='Proporcione bem-estar aos seus colaboradores'
				image={packedLunchImg}
				alt='pacotes de almoço'
			>
				Ter fruta fresca todas as semanas no seu local de trabalho é uma
				iniciativa simples, um investimento nos seus colaboradores a um
				custo bastante reduzido.
			</InfoWrapper>
			<InfoWrapper
				title='Como nós trabalhamos'
				image={handshakeImg}
				alt='Aperto de mãos'
				reverse={true}
			>
				A Tudofresh ajuda a sua empresa a promover momentos diferentes,
				desde uma simples pausa a uma reunião mais importante.
				Experimente os nossos serviços!
			</InfoWrapper>
			<Footer />
		</Container>
	);
};

export default Office;
