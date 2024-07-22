import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeContent } from "shared/ui/animations";
import styled from "styled-components";
import { ScrollArea, SelectBox, SelectContainer } from "widgets/selection/selection";
import { StartButton } from "widgets/submit/buttons";
import { HeaderText } from "widgets/text/headers";

const ThemeSelection: FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    setIsFadingOut(true);
    setTimeout(() => navigate("/selection/theme/contents"), 1500);
  };

  return (
    <>
      <FadeContent order={0} isFadingOut={isFadingOut}>
        <HeaderText>어떤 주제로 면접을 원하세요?</HeaderText>
      </FadeContent>
      <FadeContent order={1} isFadingOut={isFadingOut}>
        <SelectContainer>
          <ScrollArea>
            <SelectBox>전체 선택</SelectBox>
            <SelectBox>HTML / CSS</SelectBox>
            <SelectBox>자바스크립트</SelectBox>
            <SelectBox>타입스크립트</SelectBox>
            <SelectBox>리액트</SelectBox>
          </ScrollArea>
        </SelectContainer>
        <StartButton onClick={handleSubmitClick}>확인</StartButton>
      </FadeContent>
    </>
  );
};

export default ThemeSelection;
