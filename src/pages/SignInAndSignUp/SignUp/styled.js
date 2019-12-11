import styled from "styled-components";

export const Container = styled.section`
  margin: 1rem;
  max-width: 15rem;
`;

export const SignForm = styled.form`
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Header = styled.article`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #555;
  > h2 {
    margin-bottom: 0.5rem;
  }
`;
