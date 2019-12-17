import styled, { css } from "styled-components";
import { fade } from "../../styles/animation";

const fadeRule = css`
  ${fade} 0.5s
`;

export const Container = styled.section``;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 70;
  animation: ${fadeRule};
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 5vw;
  top: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.5);

  :hover,
  :focus {
    color: #ef405acf;
  }

  > svg {
    border-radius: 50%;
    font-size: 1.3rem;
  }
`;

export const Content = styled.article`
  transition: all 0.5s ease-in-out;
  position: fixed;
  background-color: #fff;
  z-index: 80;
  top: 50%;
  max-width: 50rem;
  width: 100%;
  min-height: 8rem;
  left: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);
  overflow: auto;

  @media only screen and (max-width: 50rem) {
    height: 100%;
  }
`;
