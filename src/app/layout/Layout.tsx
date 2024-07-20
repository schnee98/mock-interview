import { FC, ReactNode } from "react";
import styled from "styled-components";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Layout;
