import styled, { css } from "styled-components";

export const Container = styled.div`
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 10px #00000038;
	cursor: pointer;
	height: 15rem;
	padding: 0 20px;
	position: relative;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0.025);
	text-align: center;
	transition: height 1000ms;
	width: 14rem;
	min-width: 10rem;
	scroll-snap-align: center;

	::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		height: 11rem;
		background-color: #fff;
		z-index: 1;
	}

	${({ expand }) =>
		expand &&
		css`
			height: 20rem;
		`}
`;

export const CardArrow = styled.svg`
	transform-origin: 50%;
	transform: rotate(180deg);
	transition: transform 1s, height 1s;

	${({ expand }) =>
		expand &&
		css`
			transform: rotate(90deg);
			height: 0.3rem;
		`}
`;

export const CardButton = styled.button`
	display: flex;
	position: absolute;
	bottom: 20px;
	font-size: 0.7rem;
	left: 50%;
	transform: translateX(-50%);
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	background-color: transparent;
	border: none;
	translate: 0.5s;
	border-radius: 3px;

	:hover {
		background-color: #cccccc;
	}

	${({ expand }) =>
		expand &&
		css`
			background-color: #dfdfdf;
			justify-content: flex-end;
		`}

	> p {
		display: none;

		${({ expand }) =>
			expand &&
			css`
				display: block;
			`}
	}
`;

export const CardImage = styled.img`
	position: relative;
	width: 66%;
	margin-top: 30px;
	transform: translateY(10px);
	transition: transform 1000ms;
	z-index: 1;

	${({ expand }) =>
		expand &&
		css`
			transform: translateY(0);
		`}
`;

export const CardContent = styled.span`
	display: flex;
	flex-direction: column;
	transform: translateY(-160px);
	transition: transform 1000ms;

	${({ expand }) =>
		expand &&
		css`
			transform: translateY(-15px);
		`}
`;

export const CardTitle = styled.p`
	font-weight: bold;
	margin: 1rem 0;
`;

export const CardDesc = styled.p`
	font-size: 0.7rem;
`;
