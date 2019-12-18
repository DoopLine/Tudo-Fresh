import React from "react";

import { Container, ImageWrapper, HeaderText, Content } from "./styled";

const InfoOverlayWrapper = ({ children, title, image }) => {
	return (
		<Container>
			<HeaderText>{title}</HeaderText>
			<ImageWrapper>
				<img src={image} alt={title} />
			</ImageWrapper>
			<Content>{children}</Content>
		</Container>
	);
};

export default InfoOverlayWrapper;
