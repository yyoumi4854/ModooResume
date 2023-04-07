import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";

import * as styled from "../../../styles/components/layout/header/Nav";

const Nav = () => {
  const router = useRouter();

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  return (
    <styled.NavCon>
      <ul>
        <styled.Navli pathname={router.pathname === "/"} mode={mode}>
          <Link href="/">발견</Link>
        </styled.Navli>
        <styled.Navli pathname={router.pathname === "/Resume"} mode={mode}>
          <Link href="/Resume" as="resume">
            이력서
          </Link>
        </styled.Navli>
      </ul>
    </styled.NavCon>
  );
};

export default Nav;
