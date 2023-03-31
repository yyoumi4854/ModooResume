import { DefaultTheme } from "styled-components";

export type colorsType = typeof colors;
export type fontSizesType = typeof fontSizes;
export type commonType = typeof common;
export type deviceType = typeof device;

const colors = {
  // main
  main: "#FF6678",

  // gray
  grayBg: "#F8F8F8",
  grayBd: "#E1E2E3",

  // black
  blackText: "#333",
};

const fontSizes = {
  basicsDesktop: "15px",
  title: "1.5rem", // 22.5px
  middle: "1.2rem", // 24px
  small: ".86rem", // 12px

  // 15
  // 1.6 = 24
  // 1.5 = 22.5
  // 1.2 = 18
  // .8 = 12
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
  userForm: `@media only screen and (max-width: 448px)`,
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  device,
  common,
};

export default theme;
