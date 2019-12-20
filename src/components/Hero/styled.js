import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  max-height:25rem;
  min-height: 15rem;
  text-align: center;
  background: linear-gradient(45deg, #15151573, #2f2f2f5c),
    url(${({ image }) => image}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  color: #fff;
  padding-left: 1rem;
  align-items: center;

  > h1 {
    margin: 0;
    font-size: calc(4vw + 4vh);
    width: 60%;
    text-align: left;
    text-shadow: 2px 2px 5px #0000002b;
    line-height: 1;
  }
`;
