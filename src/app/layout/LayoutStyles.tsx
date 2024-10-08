import { BACKGROUND } from "shared/constants";
import styled from "styled-components";

export const MainContainer = styled.div`
  ${BACKGROUND}

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 41rem;
  max-width: 100vw;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 650px) {
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    padding: 0;
  }
`;
