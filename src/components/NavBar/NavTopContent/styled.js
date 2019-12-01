import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  display: flex;
  height: 1rem;
  cursor: pointer;
  margin-right: 1rem;
`;

export const SearchPlaceHolder = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0.2rem;
  border-bottom: 2px solid #777;
  align-items: center;
  margin-left: auto;

  > * {
    font-size: 0.6rem;
    color: #777;
  }
  > p {
    font-weight: 600;
    margin-right: 1rem;
  }

  >svg{
    width: .8rem;
    height: .8rem;
  }

  @media only screen and (max-width: 25rem) {
    margin-right: initial;
    > p {
      border-bottom: none;
      display: none;
    }
  }
`;