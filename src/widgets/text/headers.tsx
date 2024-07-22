import { headerAnimation } from "shared/ui/animations";
import styled from "styled-components";

const HeaderItem = styled.h1`
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
  font-size: 3rem;
  margin: 0;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const AnimatedHeaderItem = styled(HeaderItem)`
  animation: ${headerAnimation} 2s infinite linear;
`;

export const Logo = styled(AnimatedHeaderItem)`
  font-family: "Bungee Shade", cursive;
  font-size: 4rem;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const HeaderText = styled(AnimatedHeaderItem)`
  font-family: "TheJamsil5Bold", cursive;
`;

const BaseText = styled.div`
  font-family: "TheJamsil5Bold", cursive;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;

export const Subtitle = styled(BaseText)`
  padding: 0.5rem 0.75rem;
  background-color: #e2e2e2;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
`;
