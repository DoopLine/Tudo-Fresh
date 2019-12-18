import React from "react";

import { Container, TextWapper } from "./styled";

const InfoWrapper = ({
	title,
	children,
	image,
	alt,
	flex = true,
	cover = true,
	reverse = false,
	style
}) => {
	return (
		<Container hasImg={!!image} flex={flex} reverse={reverse}>
			<TextWapper hasImg={!!image} style={style}>
				<h1>{title}</h1>
				<p>{children}</p>
			</TextWapper>
			{image && (
				<img
					className='flex-img'
					src={image}
					alt={alt}
					style={{
						objectFit: `${cover ? "cover" : "contain"}`
					}}
				/>
			)}
		</Container>
	);
};

export default InfoWrapper;
