import styled, { css, keyframes } from "styled-components";

const tablet = "850px";

const animLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
}
40% {
    opacity: 0;
    transform: translateX(100%);
}

80%{
    opacity: 0;
    transform: translateX(-100%);
}

100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
	position: relative;
	height: fit-content;
	display: flex;
	background: url(${({ bg }) => bg});
	background-position: center;
	background-size: cover;
	align-items: center;
	height: 60vh;
	max-height: 25rem;
	min-height: 15rem;

	::before {
		content: "";
		position: absolute;
		opacity: 0.3;
		width: 100%;
		height: 100%;
		background-color: #000;
	}

	> svg {
		z-index: 2;
		position: absolute;
		top: 50%;
		cursor: pointer;
		color: white;
		font-size: 1.5rem;
		/* margin: 0 1rem; */

		:first-child {
			left: 20px;
		}
		:last-child {
			right: 20px;
		}

		@media screen and (max-width: 720px) {
			display: none;
		}
	}
`;

export const SlideContent = styled.article`
	display: flex;
	width: 100%;
	z-index: 1;
	height: 85%;
	margin: 0 3.5rem;

	${({ hasAnimation, animDirection }) => {
		if (hasAnimation && animDirection) {
			return css`
				animation: ${animLeft} 0.5s ease-out reverse;
			`;
		}

		if (hasAnimation && !animDirection) {
			return css`
				animation: ${animLeft} 0.5s ease-out;
			`;
		}
	}}

	> div {
		width: 50%;

		:last-child {
			background-color: rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
		}
	}

	@media screen and (max-width: ${tablet}) {
		flex-direction: column;
		align-items: center;
		margin: 0;
		height: 100%;

		> div {
			width: 100%;

			:first-child {
				height: 100%;
			}

			:last-child {
				position: absolute;
				bottom: 0;
			}
		}
	}
`;

export const SlideText = styled.p`
	color: #fff;
	margin: 0;
	font-size: 1.2rem;

	@media screen and (max-width: ${tablet}) {
		font-size: 1rem;
	}
`;

export const IconButton = styled.button`
	color: #fff;
	margin: 0;
	font-size: 1.5rem;
`;

export const SlideNav = styled.div`
	position: absolute;
	bottom: -1rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;

	> *:not(:last-child) {
		margin-right: 1rem;
	}
`;

export const SlideNavButton = styled.button`
	background-color: #fff;
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0.7;
	box-shadow: 0 0 0 0.07rem #000000b5;
	border: none;

	${({ active }) =>
		active &&
		css`
			box-shadow: 0 0 0 0.1rem #2cb24d;
			opacity: 1;
		`}
`;

export const SlideImageWrapper = styled.div`
	width: 50%;
`;

export const SlideImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
