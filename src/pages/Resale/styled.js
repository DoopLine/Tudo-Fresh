import styled from "styled-components";

export const Container = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  height: calc(100% - 4rem);
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (max-width: 45rem) {
    height: calc(100% - 2rem);
  }
`;

export const IntroSection = styled.section`
  padding: 1rem 2rem;
  font-size: 0.7rem;

  > h4 {
    font-size: 1rem;
  }

  > ul {
    padding: 0 1rem;
    line-height: 25px;
  }

  > * {
    margin: 0;

    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
export const StepsSection = styled(IntroSection)`
  > ul {
    > li:first-child {
      list-style: none;
      margin-left: -1rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: darkslategray;
    }
  }
`;
