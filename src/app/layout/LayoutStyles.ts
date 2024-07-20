import { dropAnimation, fillBackground } from 'shared/ui/animations';
import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 38rem;
  max-width: 100vw;
  padding: 0 2rem;
  z-index: 1;
`;

export const WaterDrop = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e2e2e2;
  border-radius: 50%;
  position: absolute;
  animation: ${dropAnimation} 1.5s forwards;
`;

export const BackgroundFill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  background-color: #e2e2e2;
  animation: ${fillBackground} 1s 1.75s forwards;
`;