import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 10rem;
  max-height: 20rem;

  @media only screen and (max-width: 50rem) {
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    max-height: initial;
    > * {
      width: 90% !important ;
      :first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 3px #0000003b;
`;

export const DetailWrapper = styled.div`
  width: 55%;
  display: flex;
  box-shadow: -1px -2px 2px #0000003b;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 1rem;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;

  > * {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 0.8rem;
  }

  > button {
    margin: 0.5rem 0;
  }
`;
