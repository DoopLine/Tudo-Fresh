import styled, { css } from "styled-components";
import { scaleIn50 } from "../../../styles/animation";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	align-items: center;
	width: 100%;

	> svg {
		display: none;
		@media only screen and (max-width: 55rem) {
			display: initial;
			z-index: 1;
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;

	@media only screen and (max-width: 55rem) {
		display: none;

		${({ showMenu }) =>
			showMenu &&
			css`
				display: flex;
				position: absolute;
				left: 50%;
				z-index: 1;
				transform: translateX(-50%);
				animation: ${scaleIn50} 0.95s
					cubic-bezier(0.02, 0.79, 0.34, 1.26) forwards;
				top: 40%;
				flex-direction: column;
				width: fit-content;
				align-items: center;

				> * {
					margin-bottom: 0.5rem;
				}
			`}
	}
`;

export const Logo = styled.img`
	display: flex;
	height: 1rem;
	cursor: pointer;

	@media only screen and (max-width: 55rem) {
		margin-right: 0;
		margin-left: auto;
	}
`;

export const SearchPlaceHolder = styled.div`
	display: flex;
	overflow: hidden;
	padding: 0.2rem;
	border-bottom: 2px solid #777;
	align-items: center;

	> * {
		font-size: 0.6rem;
		color: #777;
	}
	> p {
		font-weight: 600;
		margin-right: 0.5rem;
	}

	> svg {
		width: 0.8rem;
		height: 0.8rem;
	}
`;
