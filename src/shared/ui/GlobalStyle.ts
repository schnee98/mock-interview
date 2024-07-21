import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Cafe24Moyamoya-Regular-v1.0";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/Cafe24Moyamoya-Regular-v1.0.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
  }

  * {
    color: black;
  }
`;

export default GlobalStyle;
