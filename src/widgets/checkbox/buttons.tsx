import styled from "styled-components";

export const CheckboxWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7rem;
  min-height: 7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
`;

export const CheckboxTitle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 7rem;
  min-height: 7rem;
  border-radius: 0.5rem;
  border: 2px solid #818181;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
`;

export const CheckboxIcon = styled.span`
  transition: 0.375s ease;
  color: #494949;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const CheckboxLabel = styled.span`
  color: #707070;
`;
