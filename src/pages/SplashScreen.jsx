import styled from "@emotion/styled";
import { memo, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import { palette } from "../utils/palatte";

const splashScreenElement = document.getElementById("splash-screen");

const SplashScreen = ({ fadeOutTime = 2000 }) => {
  useLayoutEffect(() => {
    const clearId = setTimeout(() => {
      splashScreenElement.innerHTML = "";
    }, fadeOutTime);

    return () => {
      clearTimeout(clearId);
    };
  }, [fadeOutTime]);

  return createPortal(
    <Wrapper>
      <img src="/Icon/SplashLogo.svg" width={"144px"}></img>
    </Wrapper>,
    splashScreenElement
  );
};

const Wrapper = styled.div`
  background-color: ${palette.primary.default};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;
`;

export default memo(SplashScreen);
