import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 0.7em;
  height: 2rem;
  position: relative;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  border-bottom: 2px solid #777;
  outline: none;
  padding-bottom: 0.2rem;
  align-self: flex-end;
  width: 100%;
  font-size: initial;

  :focus,
  :focus + button {
    border-bottom: 2px solid #26b465;
  }

  :focus ~ label {
    top: 0;
    font-size: 0.6rem;
    color: currentColor;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0.9rem;
  transition: 0.2s;
  color: #777;

  ${({ shink }) =>
    shink &&
    css`
      top: 0;
      font-size: 0.6rem;
      color: currentColor;
    `}
`;

export const CleanButton = styled.button`
  -webkit-appearance: none;
  border: none;
  border-bottom: 2px solid #777;
  outline: none;
  padding-bottom: 0.1rem;
  background: transparent;
  cursor: pointer;
  align-self: flex-end;
`;
