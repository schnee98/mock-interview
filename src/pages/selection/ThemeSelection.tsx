import { FC, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SELECT_ALL, THEMES } from "shared/constants";
import { loadFromStorage } from "shared/helper/sessionStorage";
import useSelectionStore from "shared/store/useSelectionStore";
import { FadeContent } from "shared/ui/animations";
import { ScrollArea, SelectBox, SelectContainer } from "widgets/selection/selection";
import { SubmitButton } from "widgets/submit/buttons";
import { HeaderText } from "widgets/text/headers";

const ThemeSelection: FC = () => {
  const { developer, setTheme } = useSelectionStore();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string[]>(() => {
    const storedValue = loadFromStorage("themes");
    return Array.isArray(storedValue) ? storedValue : [];
  });
  const navigate = useNavigate();
  const themes = useMemo(() => THEMES[developer], [developer]);

  const handleSubmitClick = () => {
    if (!selectedBox.length) {
      return;
    }

    setTheme(selectedBox);
    setIsFadingOut(true);
    setTimeout(() => {
      sessionStorage.setItem("themes", JSON.stringify(selectedBox));
      navigate("/selection/theme/contents");
    }, 1500);
  };

  const handleSelectBoxClick = (label: string) => {
    if (selectedBox.some((name) => name === label)) {
      setSelectedBox(selectedBox.filter((name) => name !== label).filter((name) => name !== SELECT_ALL));
      return;
    }

    const newSelectedBox = [...selectedBox, label];

    if (newSelectedBox.length === themes.length) {
      handleClickAll();
      return;
    }

    setSelectedBox([...selectedBox, label]);
  };

  const handleClickAll = () => {
    if (selectedBox.length < themes.length) {
      setSelectedBox([...themes, SELECT_ALL]);
      return;
    }

    setSelectedBox([]);
  };

  return (
    <>
      <FadeContent order={0} $isFadingOut={isFadingOut}>
        <HeaderText>어떤 주제로 면접을 원하세요?</HeaderText>
      </FadeContent>
      <FadeContent order={1} $isFadingOut={isFadingOut}>
        <SelectContainer>
          <ScrollArea>
            <SelectBox onClick={handleClickAll} $isClicked={selectedBox.includes(SELECT_ALL)}>
              {SELECT_ALL}
            </SelectBox>
            {themes.map((theme) => (
              <SelectBox
                key={theme}
                onClick={() => handleSelectBoxClick(theme)}
                $isClicked={selectedBox.some((name) => name === theme)}
              >
                {theme}
              </SelectBox>
            ))}
          </ScrollArea>
        </SelectContainer>
        <SubmitButton onClick={handleSubmitClick}>확인</SubmitButton>
      </FadeContent>
    </>
  );
};

export default ThemeSelection;
