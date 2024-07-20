import { FC } from "react";
import HeaderText from "widgets/text/HeaderText";

const DeveloperSelection: FC = () => {
  return (
    <>
      <HeaderText content="당신은 어떤 개발자인가요?" />
      <div>
        <input type="checkbox" id="backend" value="백엔드 개발자" />
        <label htmlFor="backend">백엔드 개발자</label>
      </div>
      <div>
        <input type="checkbox" id="frontend" value="프론트엔드 개발자" />
        <label htmlFor="frontend">프론트엔드 개발자</label>
      </div>
      <div>
        <input type="checkbox" id="ios" value="IOS 개발자" />
        <label htmlFor="ios">IOS 개발자</label>
      </div>
    </>
  );
};

export default DeveloperSelection;
