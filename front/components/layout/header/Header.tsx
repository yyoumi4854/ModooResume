import { useContext } from "react";

import Nav from "./Nav";
import User from "./User";
import Logo from "../../common/Logo";
import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";

import * as styled from "../../../styles/components/layout/header/Header";

const Header = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;

  return (
    <styled.HeaderCon mode={isDark ? "darkTheme" : "lightTheme"}>
      <styled.TopCon>
        <Logo />
        <User device={"mobile"} />
      </styled.TopCon>

      <styled.RightCon>
        <Nav />
        <User device={"pc"} />
      </styled.RightCon>
    </styled.HeaderCon>
  );
};

export default Header;
