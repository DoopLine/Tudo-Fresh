import styled from "styled-components";

export const Container = styled.article`
	display: flex;
	padding: 1rem;
	font-size: 0.65rem;
	justify-content: space-around;
	padding-top: 2rem;

	@media only screen and (max-width: 45rem) {
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
`;
export const ColumnTitle = styled.h4`
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 1rem;
`;

export const ColumnList = styled.ul`
	list-style: none;
	margin-bottom: 1rem;
`;

export const ColumnItem = styled.li`
	width: fit-content;
	transition: 0.3s;
	padding-bottom: 3px;
	border-bottom: 1px solid transparent;

	:hover,
	:focus {
		border-bottom: 1px solid currentColor;
	}
	:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	> a {
		text-decoration: none;
		color: currentColor;
		text-transform: uppercase;
		font-size: 0.6rem;
	}
`;
