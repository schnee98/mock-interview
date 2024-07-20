import { FC, ReactNode } from "react";
import styled from "styled-components";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 44rem;
  max-width: 100vw;
  padding: 0 2rem;
`;

export default Layout;
