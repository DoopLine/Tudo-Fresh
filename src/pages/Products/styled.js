import styled from "styled-components";

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

export const ActionTools = styled.article`
  display: flex;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin: 1.67em 1rem;
  padding: 0.7rem 0;

  >*:not(:last-child){
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 2px solid currentColor;
  }
`;
