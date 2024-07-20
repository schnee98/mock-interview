import { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Developer } from "shared/constants";
import useSelectionStore from "shared/store/useSelectionStore";
import HeaderText from "widgets/text/HeaderText";

const DeveloperSelection: FC = () => {
  const { setDeveloper } = useSelectionStore();
  const navigate = useNavigate();

  const handleCheckboxChange = ({ target: { value, checked } }: ChangeEvent<HTMLInputElement>) => {
    if (!checked) return;

    setDeveloper(value as Developer);
    navigate("/selection/theme");
  };

  return (
    <>
      <HeaderText content="당신은 어떤 개발자인가요?" />
      <div>
        <input type="checkbox" id="backend" value="백엔드 개발자" onChange={handleCheckboxChange} />
        <label htmlFor="backend">백엔드 개발자</label>
      </div>
      <div>
        <input type="checkbox" id="frontend" value="프론트엔드 개발자" onChange={handleCheckboxChange} />
        <label htmlFor="frontend">프론트엔드 개발자</label>
      </div>
      <div>
        <input type="checkbox" id="ios" value="IOS 개발자" onChange={handleCheckboxChange} />
        <label htmlFor="ios">IOS 개발자</label>
      </div>
    </>
  );
};

export default DeveloperSelection;
