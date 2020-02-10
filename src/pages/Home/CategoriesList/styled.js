import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h3`
	margin-top: 1rem;
	margin-bottom: 2rem;
`;

export const List = styled.div`
	display: flex;
	margin-bottom: 0.5rem;

	> *:not(:last-child) {
		margin-right: 0.5rem;
	}

	@media only screen and (max-width: 30rem) {
		flex-direction: column;
		> *:not(:last-child) {
			margin-right: initial;
			margin-bottom: 0.2rem;
		}
	}
`;
