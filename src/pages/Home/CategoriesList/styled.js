import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 1rem 0;
`;

export const List = styled.h3`
  display: flex;

  @media only screen and (max-width: 30rem) {
    flex-direction: column;
  }
`;
