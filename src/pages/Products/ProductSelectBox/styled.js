import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  min-width: 12rem;

  > label {
    padding-right: 0.5rem;
    border-right: 2px solid #bbb;
    margin-right: .5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 600;
  }
`;

export const Select = styled.select`
  font-size: 0.7rem;
  padding: 0 0.5rem;
  border: none;
`;
