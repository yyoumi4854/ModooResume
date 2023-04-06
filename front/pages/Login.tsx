import { useContext } from "react";
import Link from "next/link";

import { IsDark } from "../context/type";
import { ThemeContext } from "../context/themeContext";
import Logo from "../components/common/Logo";

import * as styled from "../styles/Login";

const Login = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;

  return (
    <styled.LoginWrap mode={isDark ? "darkTheme" : "lightTheme"}>
      <styled.LoginCon mode={isDark ? "darkTheme" : "lightTheme"}>
        <Logo />

        <styled.LoginformWrap>
          <form action="">
            <styled.InputBox mode={isDark ? "darkTheme" : "lightTheme"}>
              <p>이메일</p>
              <input type="text" />
            </styled.InputBox>

            <styled.InputBox mode={isDark ? "darkTheme" : "lightTheme"}>
              <p>비밀번호</p>
              <input type="password" />
            </styled.InputBox>

            <styled.btn>로그인</styled.btn>
          </form>
        </styled.LoginformWrap>

        <styled.RegisterBox>
          <Link href="/">
            <span>아직도 회원이 아니세요?</span>
            <span>회원가입 하기</span>
          </Link>
        </styled.RegisterBox>
      </styled.LoginCon>
    </styled.LoginWrap>
  );
};

export default Login;
