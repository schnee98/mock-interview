import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Developer } from "shared/constants";
import { saveInStorage } from "shared/helper/sessionStorage";
import useSelectionStore from "shared/store/useSelectionStore";
import { FadeContent } from "shared/ui/animations";
import styled from "styled-components";
import CheckIcon from "widgets/icon/CheckIcon";
import { HeaderText } from "widgets/text/headers";

const DeveloperSelection: FC = () => {
  const { setDeveloper } = useSelectionStore();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (value: Developer) => {
    setDeveloper(value);
    setIsFadingOut(true);
    setTimeout(() => {
      saveInStorage("developer", value);
      navigate("/selection/theme")}, 1500);
  };

  return (
    <>
      <FadeContent order={0} $isFadingOut={isFadingOut}>
        <HeaderText>당신은 어떤 개발자인가요?</HeaderText>
      </FadeContent>
      <FadeContent order={1} $isFadingOut={isFadingOut}>
        <Selection>
          <CheckIcon label="백엔드" img="/img/java.svg" onClick={() => handleCheckboxChange("backend")} />
          <CheckIcon label="프론트엔드" img="/img/javascript.svg" onClick={() => handleCheckboxChange("frontend")} />
          <CheckIcon label="IOS" img="/img/swift.svg" onClick={() => handleCheckboxChange("ios")} />
        </Selection>
      </FadeContent>
    </>
  );
};

const Selection = styled.div`
  display: flex;
  gap: 3rem;
`;

export default DeveloperSelection;
