import styled, { css } from "styled-components";

export const Container = styled.section`
	display: block;
	margin: 1rem;
	margin-top: 2rem;
`;

export const Header = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 37rem;
	margin: auto;
	padding: 0 0.5rem;
	align-items: center;
	margin-bottom: 1rem;

	${({ stretch }) =>
		stretch &&
		css`
			max-width: initial;
		`}

	> h3 {
		text-transform: capitalize;

		::after {
			content: "";
			display: block;
			background-color: #ddd;
			height: 3px;
			margin: 0.3rem 0.5rem;
		}
	}

	> a {
		font-size: 0.7rem;
		border-bottom: 2px solid transparent;
		text-decoration: none;
		color: currentColor;
		transition: border-color 0.3s, padding-bottom 0.3s;
		height: fit-content;
    padding: .3rem .5rem;
    border-radius: 2rem;
    transition: background-color .3s;

		:hover,
		:active {
      background-color: #dfdfdf;
		}
	}
`;

export const Content = styled.article`
	display: flex;
	justify-content: left;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 1rem;
	max-width: 37rem;
	margin: auto;

	${({ stretch }) =>
		stretch &&
		css`
			max-width: initial;
		`}

	> div:not(:last-of-type) {
		margin-right: ${({ marginRight }) => marginRight + "rem"};
	}

	${({ center }) =>
		center &&
		css`
			max-width: initial;
			justify-content: center;
		`}
`;
