import styled from "styled-components";

export const Container = styled.section`
  width: 30%;
  background-color: #fff;
  margin-left: 5px;
  padding: 0.5rem;
  /* height: fit-content; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > svg {
    color: #777;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 40vh;
  margin: 1rem 0;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7rem;

  > span {
    display: flex;

    > small {
      background-color: #f5f5f5;
      margin: 0 0.5rem;
      padding: 0.1rem 0.5rem;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
    }
  }

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
