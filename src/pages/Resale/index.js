import React from "react";

import { Container } from "./styled";

import Hero from "../../components/Hero";
// import InfoWrapper from "../../components/InfoWrapper";
import InfoOverlayWrapper from "../../components/InfoOverlayWrapper";
import Footer from "../../components/Footer";

// Images
import fruitsKioskImg from "../../assets/images/common/fruits_kiosk.jpg";
import kioskImg from "../../assets/images/common/kiosk.jpg";

const Resale = () => {
	return (
		<Container>
			<Hero
				image={fruitsKioskImg}
				text='Experimente o serviço de revenda'
			/>
			{/* <InfoWrapper alt='quiosque'>
				Tem um grande ou pequeno negócio de produtos agrícolas e quer os
				melhores e mais frescos do mercado? Compre os produtos
				TudoFresh. Com os produtos TudoFresh você tem tudo a um preço
				imbatível para o seu negócio crescer e ter muitos lucros. Pode
				escolher os produtos, as quantidades, forma de entrega e receber
				tudo com muita qualidade.
			</InfoWrapper> */}
			<InfoOverlayWrapper
				image={kioskImg}
				title='Conheça o nosso serviço de revenda'
			>
				Tem um grande ou pequeno negócio de produtos agrícolas e quer os
				melhores e mais frescos do mercado? Compre os produtos
				TudoFresh.
			</InfoOverlayWrapper>
			<Footer />
		</Container>
	);
};

export default Resale;
