import { FC, MouseEventHandler, useState } from "react";
import { CheckIconImage, CheckIconLabel, CheckIconTitle, CheckIconWrapper } from "./buttons";

interface CheckboxProps {
  label: string;
  img: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const CheckIcon: FC<CheckboxProps> = ({ label, img, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsClicked(true);
    onClick(event);
  };

  return (
    <div onClick={handleClick}>
      <CheckIconWrapper>
        <CheckIconTitle $isClicked={isClicked}>
          <CheckIconImage>
            <img src={img} alt={img} />
          </CheckIconImage>
          <CheckIconLabel>{label}</CheckIconLabel>
        </CheckIconTitle>
      </CheckIconWrapper>
    </div>
  );
};

export default CheckIcon;
