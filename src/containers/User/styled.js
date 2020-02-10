import styled from "styled-components";

export const Container = styled.section`
  margin: -1rem;
`;

export const Header = styled.article`
  height: 100%;
  background: linear-gradient(#777, #ddd);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  font-size: 0.8rem;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 5rem;
  width: 5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0px #777;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-bottom: 2rem;
`;

export const ActionItem = styled.button`
  display: flex;
  height: 2rem;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #777;

  :hover,
  :focus {
    background-color: #00000011;
  }

  > svg {
    margin-right: 1rem;
    :last-child {
      margin-right: 0;
      font-size: 0.9rem;
      margin-left: auto;
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
  font-size: 0.6rem;

  > li {
    color: #666;

    :not(:last-child) {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
      border-right: 1px solid #333;
    }
  }

  @media only screen and (max-width: 40rem) {
    flex-direction: column;
    align-items: center;

    > li {
      :not(:last-child) {
        margin-right: 0;
        padding-right: 0;
        border-right: none;

        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #333;
      }
    }
  }
`;

export const Purchases = styled.ul`
  display: flex;
  list-style: none;
  width: 20rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-left: 1px solid #777;

  > li {
    height: fit-content;
  }
`;

export const MainContent = styled.article`
  display: flex;

  @media only screen and (max-width: 55rem) {
    flex-direction: column;


    > * {
      width: 100%;
    }
  }
`;
