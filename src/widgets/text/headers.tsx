import { headerAnimation } from "shared/ui/animations";
import styled from "styled-components";

const HeaderItem = styled.h1`
  font-family: "Cafe24Moyamoya-Regular-v1.0", cursive;
  font-size: 4rem;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const Logo = styled.h1`
  animation: ${headerAnimation} 2s infinite linear;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  font-size: 4rem;
  margin: 0;

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

export const Subtitle = styled.div``;
