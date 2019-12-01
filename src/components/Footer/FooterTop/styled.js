import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  padding: 1rem;
  font-size: 0.65rem;
  justify-content: space-around;

  @media only screen and (max-width: 45rem) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
export const ColumnTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const ColumnList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`;

export const ColumnItem = styled.li`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
