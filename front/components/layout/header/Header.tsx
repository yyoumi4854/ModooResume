import { useContext } from "react";

import Nav from "./Nav";
import Auth from "./User";
import User from "./User";
import Logo from "../../common/Logo";
import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";

import * as styled from "../../../styles/components/layout/header/Header";

const Header = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  return (
    <styled.HeaderCon mode={mode}>
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
