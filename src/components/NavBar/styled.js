import styled, { css } from "styled-components";
import { scaleIn } from "../../styles/animation";

export const Container = styled.header`
	position: relative;
	display: flex;
	height: 4rem;
	justify-content: center;
	box-shadow: 0 0 0 0.05rem #ccc;
	z-index: 2;
	padding: 0 2rem;

	@media only screen and (max-width: 45rem) {
		height: 2rem;
		padding: 0 1rem;
	}
`;

export const NavWrapper = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100%;
	max-width: 70rem;
	width: 100%;
`;

export const NavList = styled.ul`
	display: flex;
	height: 100%;
	list-style: none;
	align-items: center;
	justify-content: center;
	margin: auto 0;
	color: #777;

	@media only screen and (max-width: 55rem) {
		display: none;

		${({ showMenu }) =>
			showMenu &&
			css`
				display: flex;
				position: fixed;
				left: 0;
				top: 0;
				flex-direction: column;
				background-color: #ffffffe8;
				width: 100%;
				padding-top: 5rem;
				animation: ${scaleIn} 1s cubic-bezier(0.02, 0.79, 0.34, 1.26)
					forwards;

				> * {
					margin-bottom: 0.5rem;
				}
			`}
	}
`;

export const NavLink = styled.li`
	margin-left: 2rem;
	font-size: 0.5rem;
	border-bottom: 2px solid transparent;
	transition: border-color 0.3s, padding-bottom 0.3s, font-size 0.3s;
	font-weight: 600;

	${({ active }) =>
		active &&
		css`
			/* color: #f58926; */
			border-color: #f58926;
			padding-bottom: 0.2rem;
			font-size: 0.6rem;
		`}

	&:hover,
  :focus {
		border-color: currentColor;
		padding-bottom: 0.1rem;
	}

	> a {
		text-decoration: none;
		color: currentColor;
		text-transform: uppercase;
	}

	@media only screen and (max-width: 55rem) {
		margin: 0.5rem 0;
	}
`;

export const NavSeachForm = styled.form`
	display: flex;
	justify-content: center;
	font-size: 0.8rem;
`;
