import { DefaultTheme } from "styled-components";

export type colorsType = typeof colors;
export type fontsType = typeof fonts;
export type commonType = typeof common;
export type deviceType = typeof device;

const colors = {
  // main
  main: "#FF6678", // 60%
  lightMain: "#FF99A5", // 40%

  // gray
  grayText: "#767676",

  warning: "#f21724",

  lightTheme: {
    text: "#333",
    bg: "#fff",
    lightBg: "#F8F8F8",
    border: "#E1E2E3",
  },

  darkTheme: {
    text: "#E8E8E8",
    bg: "#1e1f21",
    lightBg: "#292a2d", // 292a2d
    border: "#535457",
  },
};

const fonts = {
  size: {
    basicsDesktop: "15px",
    title: "1.5rem", // 22.5px
    medium: "1.2rem", // 24px
    small: ".86rem", // 12px
  },

  lineHeight: {
    base: 1.5,
  },
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  positionCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  positionXCenter: `
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,

  positionYCenter: `
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  `,

  marginXCenter: `
    margin: 0 auto;
  `,
};

const device = {
  desktop: `@media only screen and (max-width: 1060px)`,
  mobile: `@media only screen and (max-width: 768px)`,
};

const theme: DefaultTheme = {
  colors,
  fonts,
  device,
  common,
};

export default theme;
