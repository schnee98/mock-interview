import { FC } from "react";
import StartButton from "widgets/button/StartButton";
import HeaderText from "widgets/text/HeaderText";

const StartPage: FC = () => {
  return (
    <>
      <HeaderText content="모의면접 어플에 오신 것을 환영합니다~" />
      <StartButton />
    </>
  );
};

export default StartPage;
