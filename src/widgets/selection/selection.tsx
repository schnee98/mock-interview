import styled from "styled-components";

export const SelectContainer = styled.div`
  gap: 1rem;
  width: 25rem;
  max-height: 20rem;
  border: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectBox = styled.div<{ $isClicked: boolean }>`
  box-sizing: border-box;
  width: 20rem;
  height: 3rem;
  background-color: ${({ $isClicked }) => ($isClicked ? "#bababa" : "#fff")};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #999999;
  border-radius: 8px;
  cursor: pointer;
`;

export const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
