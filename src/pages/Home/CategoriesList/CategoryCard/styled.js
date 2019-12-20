import styled from "styled-components";

export const Container = styled.figure`
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Text = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffffde;
  padding: 1rem;
  border-radius: 3px;
  font-size: 0.7rem;
  cursor: pointer;
  text-transform: capitalize;


  :hover {
    background: #ffffff;
  }
`;
