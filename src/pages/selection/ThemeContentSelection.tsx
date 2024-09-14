import { FC, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { SELECT_ALL, THEME_CONTENTS } from "shared/constants";
import { loadFromStorage } from "shared/helper/sessionStorage";
import useSelectionStore from "shared/store/useSelectionStore";
import { FadeContent } from "shared/ui/animations";
import { ScrollArea, SelectBox, SelectContainer } from "widgets/selection/selection";
import { SubmitButton } from "widgets/submit/buttons";
import { HeaderText } from "widgets/text/headers";

const ThemeContentSelection: FC = () => {
  const { theme, setThemeContents } = useSelectionStore();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string[]>(() => {
    const storedValue = loadFromStorage("themeContents");
    return Array.isArray(storedValue) ? storedValue : [];
  });
  const themeContents = useMemo(() => theme.flatMap((name) => THEME_CONTENTS[name]).filter((name) => name), [theme]);
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    if (!selectedBox.length) return;

    setThemeContents(selectedBox.filter((name) => name !== SELECT_ALL));
    setIsFadingOut(true);
    setTimeout(() => {
      sessionStorage.setItem('themeContents', JSON.stringify(selectedBox));
      navigate("/question");
    }, 1500);
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
      <FadeContent order={0} $isFadingOut={isFadingOut}>
        <HeaderText>주제 내용을 정해주세요!</HeaderText>
        <HeaderText>{headerText}</HeaderText>
      </FadeContent>
      <FadeContent order={1} $isFadingOut={isFadingOut}>
        <SelectContainer>
          <ScrollArea>
            <SelectBox onClick={handleClickAll} $isClicked={selectedBox.includes(SELECT_ALL)}>
              {SELECT_ALL}
            </SelectBox>
            {themeContents.map((content) => (
              <SelectBox
                key={content}
                onClick={() => handleSelectBoxClick(content)}
                $isClicked={selectedBox.some((name) => name === content)}
              >
                {content}
              </SelectBox>
            ))}
          </ScrollArea>
        </SelectContainer>
        <SubmitButton onClick={handleSubmitClick}>면접 시작하기</SubmitButton>
      </FadeContent>
    </>
  );
};

export default ThemeContentSelection;
