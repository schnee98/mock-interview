import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: "Pretendard-Regular", cursive;
  }

  * {
    color: black;
  }
`;

export default GlobalStyle;
