import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  padding: 0 1rem;
  /* height: 2rem; */
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  color: #444;

  @media only screen and (max-width: 45rem) {
    flex-wrap: wrap;
  }
`;

export const CopyRight = styled.p`
  font-size: 0.7rem;
  margin: 1rem 0;
`;

export const SocialIcons = styled.span`
  display: flex;
  > * {
    cursor: pointer;

    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
