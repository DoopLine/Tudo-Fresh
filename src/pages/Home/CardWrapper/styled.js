import styled from "styled-components";

export const Container = styled.section`
  display: block;
  margin: 2rem 1rem;
`;

export const Header = styled.article`
  display: flex;
  justify-content: space-between;
  max-width: 37rem;
  margin: auto;
  padding: 0 0.5rem;

  > h3 {
    text-transform: capitalize;
  }

  > a {
    font-size: 0.7rem;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: currentColor;
    transition: border-color 0.3s, padding-bottom 0.3s;
    height: fit-content;
    /* text-transform: uppercase; */

    &:hover,
    :focus {
      border-color: currentColor;
      padding-bottom: 0.06rem;
    }
  }
`;

export const Content = styled.article`
  display: flex;
  justify-content: left;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem;
  max-width: 37rem;
  margin: auto;

  > div:not(:last-of-type) {
    margin-right: ${({marginRight}) => marginRight + 'rem'};
  }
`;
