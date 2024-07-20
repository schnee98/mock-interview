import { headerAnimation } from "shared/ui/animations";
import styled from "styled-components";

export const Logo = styled.h1`
  animation: ${headerAnimation} 2s infinite linear;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  font-size: 4rem;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const HeaderText = styled.h1`
  animation: ${headerAnimation} 2s infinite linear;
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
  text-align: center;
  font-size: 4rem;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;
