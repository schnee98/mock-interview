import { FC, useState } from "react";
import { FadeContent } from "shared/ui/animations";
import { ScrollArea, SelectBox, SelectContainer } from "widgets/selection/selection";
import { StartButton } from "widgets/submit/buttons";
import { HeaderText } from "widgets/text/headers";

const ThemeContentSelection: FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSubmitClick = () => {};

  return (
    <>
      <FadeContent order={0} isFadingOut={isFadingOut}>
        <HeaderText>주제 내용을 정해주세요! 복수 선택 가능 (0/12)</HeaderText>
      </FadeContent>
      <FadeContent order={1} isFadingOut={isFadingOut}>
        <SelectContainer>
          <ScrollArea>
            <SelectBox>전체 선택</SelectBox>
            <SelectBox>스코프</SelectBox>
            <SelectBox>프로토타입</SelectBox>
            <SelectBox>this 바인딩</SelectBox>
            <SelectBox>클로저</SelectBox>
            <SelectBox>Array.Prototype 메서드</SelectBox>
            <SelectBox>Number.Prototype 메서드</SelectBox>
            <SelectBox>String.Prototype 메서드</SelectBox>
            <SelectBox>브라우저의 렌더링 과정</SelectBox>
            <SelectBox>이벤트 전파 / 위임</SelectBox>
            <SelectBox>이벤트 루프, 태스크 큐</SelectBox>
            <SelectBox>비동기 처리</SelectBox>
            <SelectBox>Promise, async/await</SelectBox>
          </ScrollArea>
        </SelectContainer>
        <StartButton onClick={handleSubmitClick}>확인</StartButton>
      </FadeContent>
    </>
  );
};

export default ThemeContentSelection;
