import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StartButton } from "widgets/submit/buttons";
import HeaderText from "widgets/text/HeaderText";

const StartPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/selection/developer");

  return (
    <>
      <HeaderText content="슈터뷰" />
      <StartButton onClick={handleClick}>시작하기</StartButton>
    </>
  );
};

export default StartPage;
