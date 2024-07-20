import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { dropAnimation, fillBackground } from "shared/ui/animations";
import styled, { keyframes } from "styled-components";
import { StartButton } from "widgets/submit/buttons";
import { Logo } from "widgets/text/headers";

const StartPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/selection/developer");

  return (
    <>
      <Background />
      <WaterDrop />
      <BackgroundFill />
      <FadedConent order={0}>
        <Logo>schuterview</Logo>
      </FadedConent>
      <FadedConent order={1}>
        <StartButton onClick={handleClick}>시작하기</StartButton>
      </FadedConent>
    </>
  );
};

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadedConent = styled.div<{ order: number }>`
  opacity: 0;
  transform: translateY(-30px);
  animation: ${fadeAnimation} 1s calc(${({ order }) => order * 0.5}s + 3s) forwards;
`;

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

export const BackgroundFill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  animation: ${fillBackground} 1s 1.75s forwards;
`;

export default StartPage;
