import { FC, MouseEventHandler } from "react";
import { CheckboxIcon, CheckboxLabel, CheckboxTitle, CheckboxWrapper } from "./buttons";

interface CheckboxProps {
  label: string;
  img: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Checkbox: FC<CheckboxProps> = ({ label, img, onClick }) => {
  return (
    <div onClick={onClick}>
      <CheckboxWrapper>
        <CheckboxTitle>
          <CheckboxIcon>
            <img src={img} />
          </CheckboxIcon>
          <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxTitle>
      </CheckboxWrapper>
    </div>
  );
};

export default Checkbox;
