import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 0 0 3px #adadad;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
`;

export const ImageWrapper = styled.figure`
  width: 6.5rem;
  height: 6.5rem;
  box-shadow: 0 0 3px black;
  margin-top: 0rem;
  margin-left: 1rem;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;
  max-width: 8rem;

  > *:first-child {
    margin-bottom: 0.5rem;
  }

  > span {
    display: flex;

    > p:first-child {
      margin-right: 0.5rem;
    }
  }
`;

export const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 0.5rem; */
  max-width: 10rem;
  box-shadow: -2px 0px 3px #d0d0d0;
  height: 99%;
  width: 100%;

  > span {
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem;
    position: relative;

    :first-child {
      margin-bottom: 0.5rem;
      font-size: 1rem;

    }

    > *:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export const XButton = styled.button`
  position: absolute;
  top: 50%;
  right: -17px;
  font-size: 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ef3d5d;
  background-color: white;
  border-radius: 50%;
  height: 1rem;

  > svg {
    border: 1px solid;
    border-radius: 50%;
  }
`;
