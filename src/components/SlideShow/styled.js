import styled, { css, keyframes } from "styled-components";

const animLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
}
40% {
    opacity: 0;
    transform: translateX(100%);
}

80%{
    opacity: 0;
    transform: translateX(-100%);
}

100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  align-items: center;
  max-height: 30rem;

  ::before {
    content: "";
    position: absolute;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  > svg {
    z-index: 1;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    margin: 0 1rem;
  }
`;

export const SlideContent = styled.article`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 70%;

  ${({ hasAnimation, animDirection }) => {
    if (hasAnimation && animDirection) {
      return css`
        animation: ${animLeft} 0.5s ease-out reverse;
      `;
    }

    if (hasAnimation && !animDirection) {
      return css`
        animation: ${animLeft} 0.5s ease-out;
      `;
    }
  }}

  > div {
    width: 50%;
    :last-child {
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }
  }
`;

export const SlideText = styled.p`
  color: #fff;
  margin: 0;
  font-size: 1.2rem;
`;

export const IconButton = styled.button`
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
`;

export const SlideNav = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const SlideNavButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  box-shadow: 0 0 0 0.07rem #fff;
  border: none;

  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 0 0 0.1rem #fff;
      opacity: 1;
    `}
`;

export const SlideImageWrapper = styled.div`
  width: 50%;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
