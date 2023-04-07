import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import Header from "../components/layout/header/Header";
import Float from "../components/layout/Float";

import theme from "../styles/theme";
import Global from "../styles/global";
import { ThemeContext } from "../context/themeContext";

const _app = ({ Component }: AppProps) => {
  const router = useRouter();

  const derkMode =
    typeof window !== "undefined" ? localStorage.getItem("isDark") : null;
  const [isDark, setIsDark] = useState(derkMode ? true : false);
  const mode = isDark ? "darkTheme" : "lightTheme";

  return (
    <>
      <Head>
        <title>모두의 이력서</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ThemeProvider theme={theme}>
          <Global mode={mode} />
          {router.query.header !== "N" && <Header />}
          <Float />
          <Component />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default _app;
