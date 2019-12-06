import styled from 'styled-components';

export const Container = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  height: calc(100% - 4rem);
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (max-width: 45rem) {
    height: calc(100% - 2rem);
  }
`;