import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Global from "../styles/global-style";
import theme from "../styles/theme";

const _app = ({ Component }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Component />
      </ThemeProvider>
    </>
  );
};

export default _app;
