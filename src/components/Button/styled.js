import styled from "styled-components";

export const Container = styled.button`
  background-image: linear-gradient(150deg, #ef405a, #f58d23);
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 0.6rem;
  padding: 0.35rem 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-image 0.5s;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-image: linear-gradient(50deg, #f2673d, #f58d23);
  }
`;
