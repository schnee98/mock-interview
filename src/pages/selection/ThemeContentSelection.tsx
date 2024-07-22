import { FC, useState } from "react";
import { SELECT_ALL, THEME_CONTENTS } from "shared/constants";
import useSelectionStore from "shared/store/useSelectionStore";
import { FadeContent } from "shared/ui/animations";
import { ScrollArea, SelectBox, SelectContainer } from "widgets/selection/selection";
import { SubmitButton } from "widgets/submit/buttons";
import { HeaderText } from "widgets/text/headers";

const ThemeContentSelection: FC = () => {
  const { theme, setThemeContents } = useSelectionStore();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string[]>([]);
  const themeContents = theme.flatMap((name) => THEME_CONTENTS[name]).filter((name) => name);

  const handleSubmitClick = () => {
    setThemeContents(selectedBox.filter((name) => name !== SELECT_ALL));
    setIsFadingOut(true);
    // setTimeout(() => navigate("/selection/theme/contents"), 1500);
  };

  const handleSelectBoxClick = (label: string) => {
    if (selectedBox.some((name) => name === label)) {
      setSelectedBox(selectedBox.filter((name) => name !== label).filter((name) => name !== SELECT_ALL));
      return;
    }

    const newSelectedBox = [...selectedBox, label];

    if (newSelectedBox.length === themeContents.length) {
      handleClickAll();
      return;
    }

    setSelectedBox([...selectedBox, label]);
  };

  const handleClickAll = () => {
    if (selectedBox.length < themeContents.length) {
      setSelectedBox([...themeContents, SELECT_ALL]);
      return;
    }

    setSelectedBox([]);
  };

  const headerText = `복수 선택 가능 ${
    selectedBox.length > themeContents.length ? themeContents.length : selectedBox.length
  }/${themeContents.length}`;

  return (
    <>
      <FadeContent order={0} isFadingOut={isFadingOut}>
        <HeaderText>주제 내용을 정해주세요!</HeaderText>
        <HeaderText>{headerText}</HeaderText>
      </FadeContent>
      <FadeContent order={1} isFadingOut={isFadingOut}>
        <SelectContainer>
          <ScrollArea>
            <SelectBox onClick={handleClickAll} isClicked={selectedBox.includes(SELECT_ALL)}>
              {SELECT_ALL}
            </SelectBox>
            {themeContents.map((content) => (
              <SelectBox
                key={content}
                onClick={() => handleSelectBoxClick(content)}
                isClicked={selectedBox.some((name) => name === content)}
              >
                {content}
              </SelectBox>
            ))}
          </ScrollArea>
        </SelectContainer>
        <SubmitButton onClick={handleSubmitClick}>확인</SubmitButton>
      </FadeContent>
    </>
  );
};

export default ThemeContentSelection;
