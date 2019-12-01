import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;

  > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
    
    @media only screen and (max-width: 25rem) {
      margin-right: initial;
      /* margin-bottom: initial; */
    }
  }
`;
