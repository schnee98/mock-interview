import { headerAnimation } from "shared/ui/animations";
import styled from "styled-components";

const HeaderItem = styled.h1`
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
  font-size: 4rem;
  margin: 0;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

const AnimatedHeaderItem = styled(HeaderItem)`
  animation: ${headerAnimation} 2s infinite linear;
`;

export const Logo = styled(AnimatedHeaderItem)`
  font-family: "Bungee Shade", cursive;
`;

export const HeaderText = styled(AnimatedHeaderItem)`
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
`;

const BaseText = styled.div`
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
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
