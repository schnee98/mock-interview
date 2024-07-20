import { FC } from "react";
import HeaderText from "widgets/text/HeaderText";

const ThemeSelection: FC = () => {
  return (
    <>
      <HeaderText content="어떤 주제로 면접을 원하세요?" />
      <div>
        <input type="checkbox" id="자바스크립트" value="자바스크립트" />
        <label htmlFor="자바스크립트">자바스크립트</label>
      </div>
      <div>
        <input type="checkbox" id="리액트" value="리액트" />
        <label htmlFor="리액트">리액트</label>
      </div>
    </>
  );
};

export default ThemeSelection;
