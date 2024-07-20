import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { StartButton } from "widgets/submit/buttons";
import { Logo } from "widgets/text/headers";

const StartPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/selection/developer");

  return (
    <>
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

export default StartPage;
