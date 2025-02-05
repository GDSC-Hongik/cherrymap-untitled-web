import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Pretendard";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: "Pretendard";
  }
`;

export default GlobalStyle;
