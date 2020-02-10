import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 25rem;
	display: flex;
	flex-direction: column;
	margin-bottom: 0.7rem;

	@media only screen and (max-width: 45rem) {
		height: auto;
		margin-bottom: 0.1rem;
	}
`;

export const GridRow = styled.article`
	width: 100%;
	height: 50%;
	display: flex;

	> *:first-child {
		margin-right: 0.5rem;
	}

	:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	@media only screen and (max-width: 45rem) {
		flex-direction: column;

		> *:first-child {
			margin-right: initial;
		}

		:not(:last-child) {
			margin-bottom: 0;
		}
	}
`;

export const ContentCell = styled.div`
	width: 50%;
	height: 100%;
	background-color: #cecece70;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 10rem;

	@media only screen and (max-width: 45rem) {
		width: 100%;
		margin-right: initial;
		margin-bottom: 0.5rem;
	}
`;

export const ImageCell = styled.figure`
	width: 50%;
	height: 100%;
	@media only screen and (max-width: 45rem) {
		width: 100%;
	}
`;

export const IconsWrapper = styled.span`
	border-bottom: 0.1rem solid #000;
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
	min-width: 4rem;
	display: flex;
	justify-content: center;
	font-size: 2rem;

	> svg:first-child {
		margin-right: 0.5rem;
	}
`;
