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

  > label {
    padding-right: 0.9rem;
    border-right: 2px solid #bbb;
    margin-right: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;

export const Select = styled.select`
  font-size: 0.7rem;
  padding: 0 0.5rem;
  border: none;
`;
