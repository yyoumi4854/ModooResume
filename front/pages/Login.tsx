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

import * as styled from "../styles/Login";

const Login = () => {
  const setUser = useSetRecoilState(userAtom);

  const router = useRouter();

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  const [warningMsg, setWarningMsg] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.data);
      router.replace("/");
    },
  });

  const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setEmail(value);
  };

  const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setPassword(value);
  };

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
    <styled.LoginWrap mode={mode}>
      <styled.LoginCon mode={mode}>
        <Logo />
        <styled.LoginformWrap>
          <form onSubmit={onSubmitHandler}>
            <styled.InputBox mode={mode}>
              <p>이메일</p>
              <input
                autoFocus
                type="text"
                value={email}
                onChange={onEmailHandler}
              />
            </styled.InputBox>

            <styled.InputBox mode={mode}>
              <p>비밀번호</p>
              <input type="password" onChange={onPasswordHandler} />
            </styled.InputBox>

            {warningMsg && (
              <styled.WarningMsg>
                가입되어 있지 않은 계정이거나,
                <br />
                이메일 또는 비밀번호가 일치하지 않습니다.
              </styled.WarningMsg>
            )}

            <styled.btn type="submit">로그인</styled.btn>
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
