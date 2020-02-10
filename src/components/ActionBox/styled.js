import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	background-color: whitesmoke;
	border-radius: 30px;
	align-items: center;
	color: currentColor;
	padding: 0.2rem 0.5rem;
	/* margin-left: 1rem; */
	height: fit-content;
	transition: background-color 0.2s;

	${({ inverse }) =>
		inverse &&
		css`
			background-color: transparent;

			:hover,
			:active {
				background-color: whitesmoke;
			}

			> p {
				width: auto !important;
				order: 1;
				margin-left: 0.5rem;
			}
		`}

	/* @media only screen and (max-width: 45rem) {
		display: none;
	} */

	:hover,
	:active {
		background-color: #dfdfdf;
	}

	> svg {
		font-size: 0.8rem;
		color: #777;
	}

	> p {
		font-size: 0.55rem;
		width: 4.5rem;
		margin-right: 0.5rem;
		cursor: default;
	}
`;
