import { FC, ReactNode } from "react";
import { MainContainer, MainContent } from "./LayoutStyles";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};

export default Layout;
