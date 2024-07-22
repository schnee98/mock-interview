import { FC } from "react";
import { dropAnimation, fillBackground } from "shared/ui/animations";
import styled from "styled-components";

const BackgroundAnimation: FC = () => {
  return (
    <>
      <Background />
      <WaterDrop />
      <BackgroundFill />
    </>
  );
};

const WaterDrop = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e2e2e2;
  border-radius: 50%;
  position: fixed;
  animation: ${dropAnimation} 1.5s forwards;
  z-index: 1;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const BackgroundFill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  animation: ${fillBackground} 1s 1.75s forwards;
`;

export default BackgroundAnimation;
