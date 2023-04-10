import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

import Logo from "../components/common/Logo";
import { IsDark } from "../context/type";
import { ThemeContext } from "../context/themeContext";
import { validateEmail, validatePassword } from "../utils/regExp";
import { login } from "../api/user";
import { userAtom } from "../recoil/user";

import * as authStyled from "../styles/components/Auth";
import * as styled from "../styles/pages/Login";

const Login = () => {
  const setUser = useSetRecoilState(userAtom);

  const router = useRouter();

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  const [warningMsg, setWarningMsg] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setEmail(value);
  };

  const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setPassword(value);
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.data);
      router.replace("/");
    },
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 리프레시 막기

    if (
      !email ||
      !password ||
      !validateEmail(email) ||
      !validatePassword(password)
    ) {
      setWarningMsg(true);
    }

    mutation.mutate({ email: email, password: password });
  };

  return (
    <authStyled.AuthWrap mode={mode}>
      <authStyled.AuthCon mode={mode}>
        <styled.LogoWrap>
          <Logo />
        </styled.LogoWrap>

        <authStyled.LoginformWrap>
          <form onSubmit={onSubmitHandler}>
            <authStyled.InputBox mode={mode}>
              <p>이메일</p>
              <input
                autoFocus
                type="text"
                value={email}
                onChange={onEmailHandler}
              />
            </authStyled.InputBox>

            <authStyled.InputBox mode={mode}>
              <p>비밀번호</p>
              <input type="password" onChange={onPasswordHandler} />
            </authStyled.InputBox>

            {warningMsg && (
              <authStyled.Msg state={"warning"}>
                가입되어 있지 않은 계정이거나,
                <br />
                이메일 또는 비밀번호가 일치하지 않습니다.
              </authStyled.Msg>
            )}

            <authStyled.btn type="submit">로그인</authStyled.btn>
          </form>
        </authStyled.LoginformWrap>
        <styled.RegisterBox>
          <Link href="/Register" as="/auth/register">
            <span>아직도 회원이 아니세요?</span>
            <span>회원가입 하기</span>
          </Link>
        </styled.RegisterBox>
      </authStyled.AuthCon>
    </authStyled.AuthWrap>
  );
};

export default Login;
