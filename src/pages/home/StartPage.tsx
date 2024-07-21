import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { StartButton } from "widgets/submit/buttons";
import { Logo, Subtitle } from "widgets/text/headers";
import BackgroundAnimation from "./BackgroundAnimation";

const StartPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/selection/developer");

  return (
    <>
      <BackgroundAnimation />
      <FadedConent order={0}>
        <Logo>schuterview</Logo>
        <Subtitle>모 의 개 발 자 인 터 뷰</Subtitle>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  opacity: 0;
  transform: translateY(-30px);
  animation: ${fadeAnimation} 1s calc(${({ order }) => order * 0.5}s + 3s) forwards;
`;

export default StartPage;
