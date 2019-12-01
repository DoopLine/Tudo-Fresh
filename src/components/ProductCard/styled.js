import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #eee;
  width: 11rem;
  min-width: 11rem;
  transition: box-shadow 0.3s;

  :hover,
  :focus-within,
  :focus {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

export const Content = styled.div`
  padding: 0.5rem;
  border-top: 2px solid #eee;
  background-color: rgba(245, 245, 245, 0.6);

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Buttons = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const PriceText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
