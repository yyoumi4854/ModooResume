import { useContext } from "react";
import Link from "next/link";

import { IsDark } from "../context/type";
import { ThemeContext } from "../context/themeContext";
import Logo from "../components/common/Logo";

import * as styled from "../styles/Login";

const Login = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  return (
    <styled.LoginWrap mode={mode}>
      <styled.LoginCon mode={mode}>
        <Logo />

        <styled.LoginformWrap>
          <form action="">
            <styled.InputBox mode={mode}>
              <p>이메일</p>
              <input type="text" />
            </styled.InputBox>

            <styled.InputBox mode={mode}>
              <p>비밀번호</p>
              <input type="password" />
            </styled.InputBox>

            <div>
              <span>
                가입되어 있지 않은 계정이거나,
                <br />
                이메일 또는 비밀번호가 일치하지 않습니다.
              </span>
            </div>

            <styled.btn>로그인</styled.btn>
          </form>
        </styled.LoginformWrap>

        <styled.RegisterBox>
          <Link href="/Register" as="/auth/register">
            <span>아직도 회원이 아니세요?</span>
            <span>회원가입 하기</span>
          </Link>
        </styled.RegisterBox>
      </styled.LoginCon>
    </styled.LoginWrap>
  );
};

export default Login;
