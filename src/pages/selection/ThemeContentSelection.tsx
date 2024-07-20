import { FC } from "react";
import HeaderText from "widgets/text/HeaderText";

const ThemeContentSelection: FC = () => {
  return (
    <>
      <HeaderText content="주제 내용을 정해주세요! 복수 선택 가능 (0/12)" />
      <div>
        <input type="checkbox" id="프로토타입" value="프로토타입" />
        <label htmlFor="프로토타입">프로토타입</label>
      </div>
      <div>
        <input type="checkbox" id="스코프" value="스코프" />
        <label htmlFor="스코프">스코프</label>
      </div>
      <div>
        <input type="checkbox" id="클로저" value="클로저" />
        <label htmlFor="클로저">클로저</label>
      </div>
      <div>
        <input type="checkbox" id="전체 선택" value="전체 선택" />
        <label htmlFor="전체 선택">전체 선택</label>
      </div>
    </>
  );
};

export default ThemeContentSelection;
