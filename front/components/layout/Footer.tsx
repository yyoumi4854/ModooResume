import { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import { IsDark } from "../../context/type";

import Logo from "../common/Logo";

import * as styled from "../../styles/components/layout/Footer";

const Footer = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;

  return (
    <styled.FooterCon mode={isDark ? "darkTheme" : "lightTheme"}>
      <styled.TopCon>
        <Logo />

        <styled.ListWrap>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
        </styled.ListWrap>
      </styled.TopCon>

      <styled.BottomCon mode={isDark ? "darkTheme" : "lightTheme"}>
        <p>© 2023. modooResume all rights reserved.</p>
      </styled.BottomCon>
    </styled.FooterCon>
  );
};

export default Footer;
