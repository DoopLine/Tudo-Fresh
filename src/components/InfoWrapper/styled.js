import styled, { css } from "styled-components";

export const Container = styled.article`
	display: flex;
	max-width: 813px;
	padding-left: 0.6rem;
	padding-right: 0.6rem;
	margin: .5rem auto;
	height: 30rem;
	overflow-y: auto;

	${({ reverse }) =>
		reverse &&
		css`
			flex-direction: row-reverse;
		`}

	${({ hasImg }) =>
		hasImg &&
		css`
			max-width: initial;
			padding-left: initial;
			padding-right: initial;
		`}

	${({ flex }) =>
		!flex &&
		css`
			max-width: initial;
			padding-left: initial;
			padding-right: initial;
			max-height: initial;
			justify-content; center;
			height: auto;
		`}

  >img {
		width: 50%;
		height: 100%;
		object-fit: cover;
		/* max-width: 20rem; */
	}
`;

export const TextWapper = styled.span`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	width: 50%;

	> h1 {
		font-size: 1.7rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;

		::after {
			content: "";
			width: 4rem;
			height: 0.3rem;
			background-color: currentColor;
			margin: 1rem 0;
		}
	}

	> p {
		font-size: 1rem;
		line-height: 30px;
		letter-spacing: 1px;
		max-width: 55rem;
		margin: auto;
	}

	${({ hasImg }) =>
		hasImg &&
		css`
			background-color: #dedede21;
			padding: 1rem 2rem;

			> h1 {
				font-size: 1.3rem;
			}

			> p {
				margin: initial;
			}
		`}

	${({ flex }) =>
		!flex &&
		css`
			margin-right: .5rem;
			width: 100%;

			> p {
				font-size: 0.8rem;
			}
		`}
`;
