import styled from "styled-components";

export const CheckIconWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7rem;
  min-height: 7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;

  @media (max-width: 650px) {
    width: 3.5rem;
    min-height: 3.5rem;
  }
`;

export const CheckIconTitle = styled.span<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 7rem;
  min-height: 7rem;
  border-radius: 0.5rem;
  border: 2px solid #818181;
  background-color: ${({ isClicked }) => (isClicked ? "#e7e7e7" : "#fff")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;

  @media (max-width: 650px) {
    width: 5rem;
    min-height: 5rem;
  }
`;

export const CheckIconImage = styled.span`
  transition: 0.375s ease;
  color: #494949;

  img {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 650px) {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const CheckIconLabel = styled.span`
  color: #707070;

  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;
