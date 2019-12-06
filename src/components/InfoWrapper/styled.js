import styled, { css } from "styled-components";

export const Container = styled.article`
  max-width: 813px;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  margin: 1rem auto;
  max-height: 15rem;

  ${({ hasImg }) =>
    hasImg &&
    css`
      display: flex;
      max-width: initial;
      padding-left: initial;
      padding-right: initial;
    `}

  ${({ flex }) =>
    !flex &&
    css`
      display: block;
      max-width: initial;
      padding-left: initial;
      padding-right: initial;
      max-height: initial;

      > img {
        transform: translateX(50%);
        max-width: initial !important;
      }
    `}

  >img {
    width: 50%;
    height: 100%;
    object-fit: contain;
    margin-right: 1rem;
    max-width: 20rem;
  }
`;

export const TextWapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;

  > h1 {
    font-size: 1.7rem;
  }

  > p {
    font-size: 0.7rem;
    line-height: 25px;
  }

  ${({ hasImg }) =>
    hasImg &&
    css`
      background-color: #dedede21;
      padding: 1rem 2rem;

      > h1 {
        font-size: 1.3rem;
      }
    `}
`;
