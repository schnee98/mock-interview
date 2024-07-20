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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 38rem;
  max-width: 100vw;
  padding: 0 2rem;
`;

export default Layout;
