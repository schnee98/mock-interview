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
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
  width: 41rem;
  max-width: 100vw;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;
