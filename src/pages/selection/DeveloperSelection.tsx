import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Developer } from "shared/constants";
import useSelectionStore from "shared/store/useSelectionStore";
import styled from "styled-components";
import Checkbox from "widgets/checkbox/Checkbox";
import { HeaderText } from "widgets/text/headers";

const DeveloperSelection: FC = () => {
  const { setDeveloper } = useSelectionStore();
  const navigate = useNavigate();

  const handleCheckboxChange = (value: Developer) => {
    setDeveloper(value);
    navigate("/selection/theme");
  };

  return (
    <>
      <HeaderText>당신은 어떤 개발자인가요?</HeaderText>
      <Selection>
        <Checkbox label="백엔드" img="/img/java.svg" onClick={() => handleCheckboxChange("backend")} />
        <Checkbox label="프론트엔드" img="/img/javascript.svg" onClick={() => handleCheckboxChange("frontend")} />
        <Checkbox label="IOS" img="/img/swift.svg" onClick={() => handleCheckboxChange("ios")} />
      </Selection>
    </>
  );
};

const Selection = styled.div`
  display: flex;
  gap: 2rem;
`;

export default DeveloperSelection;
