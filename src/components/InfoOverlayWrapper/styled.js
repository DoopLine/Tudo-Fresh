import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 813px;
	margin: 7rem auto;
	height: 15rem;
	background-color: khaki;
	justify-content: center;
`;

export const ImageWrapper = styled.figure`
	width: 100%;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const HeaderText = styled.h3`
	margin: 1rem 0;
	margin-left: -3rem;
	display: flex;
	flex-direction: column;

	::after {
		content: "";
		width: 5rem;
		height: 0.15rem;
		background-color: currentColor;
		margin-top: 0.4rem;
		margin-left: 0.1rem;
	}
`;

export const Content = styled.article`
	background-color: #fff;
	width: 17rem;
	height: fit-content;
	padding: 1rem;
	box-shadow: 0 0 5px #00000061;
	align-self: flex-end;
	margin-top: -5rem;
	margin-right: -3rem;
`;
