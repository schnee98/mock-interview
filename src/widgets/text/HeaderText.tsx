import { FC } from "react";
import styled from "styled-components";

interface HeaderTextProps {
  content: string;
}

const HeaderText: FC<HeaderTextProps> = ({ content }) => {
  return <Content>{content}</Content>;
};

const Content = styled.h1``;

export default HeaderText;
