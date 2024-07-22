import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body {
    margin: 0;
    font-family: "TheJamsil5Bold", cursive;
  }

  * {
    color: black;
  }
`;

export default GlobalStyle;
