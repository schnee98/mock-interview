import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "widgets/submit/buttons";
import { Logo, Subtitle } from "widgets/text/headers";
import BackgroundAnimation from "./BackgroundAnimation";
import { FadeContent } from "shared/ui/animations";

const StartPage: FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsFadingOut(true);
    setTimeout(() => navigate("/selection/developer"), 1500);
  };

  return (
    <>
      <BackgroundAnimation />
      <FadeContent order={0} $isFadingOut={isFadingOut} $delay={3}>
        <Logo>schuterview</Logo>
        <Subtitle>모 의 개 발 자 인 터 뷰</Subtitle>
      </FadeContent>
      <FadeContent order={1} $isFadingOut={isFadingOut} $delay={3}>
        <SubmitButton onClick={handleClick}>시작하기</SubmitButton>
      </FadeContent>
    </>
  );
};

export default StartPage;
