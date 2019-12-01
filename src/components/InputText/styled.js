import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  border-bottom: 2px solid #777;
  outline: none;
  padding-bottom: .2rem; 

  :focus, :focus + button{
    border-bottom: 2px solid #26b465;
  }
`;

export const CleanButton = styled.button`
  -webkit-appearance: none;
  border: none;
  border-bottom: 2px solid #777;
  outline: none;
  padding-bottom: .1rem; 
  background: transparent;
  cursor: pointer;
`;
