import { FC, ReactNode } from "react";
import { BackgroundFill, MainContainer, MainContent, WaterDrop } from "./LayoutStyles";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainContainer>
      <WaterDrop />
      <MainContent>{children}</MainContent>
      <BackgroundFill />
    </MainContainer>
  );
};

export default Layout;
