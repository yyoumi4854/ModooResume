import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import Logo from "../components/common/Logo";
import { ThemeContext } from "../context/themeContext";

import { IsDark } from "../context/type";
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from "../utils/regExp";
import { register } from "../api/user";

import * as authStyled from "../styles/components/Auth";
import * as styled from "../styles/pages/Register";

// 이메일, 닉네임, 비밀번호, 비밀번호 확인 -> 확인
const Register = () => {
  const router = useRouter();

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCechkPassword] = useState("");

  const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setEmail(value);
  };

  const onNickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setNickName(value);
  };

  const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setPassword(value);
  };

  const onCheckPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as any;
    setCechkPassword(value);
  };

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      router.replace("/Login", "/auth/register");
    },
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 리프레시 막기

    if (
      validateEmail(email) &&
      validateNickname(nickName) &&
      validatePassword(password) &&
      password === checkPassword
    ) {
      mutation.mutate({ email: email, nickName: nickName, password: password });
    } else {
      alert("회원가입 실패했습니다. 다시 수정해주세요.");
    }
  };

  return (
    <authStyled.AuthWrap mode={mode}>
      <authStyled.AuthCon mode={mode}>
        <styled.TitleWrap>
          <Logo />
          <h2>이메일로 가입하기</h2>
        </styled.TitleWrap>

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

            {validateEmail(email) && (
              <authStyled.Msg state={"success"}>
                알맞은 이메일 형식 입니다.
              </authStyled.Msg>
            )}

            <authStyled.InputBox mode={mode}>
              <p>닉네임</p>
              <input type="text" onChange={onNickNameHandler} />
            </authStyled.InputBox>

            {validateNickname(nickName) && (
              <authStyled.Msg state={"success"}>
                알맞은 닉네임 형식 입니다.
              </authStyled.Msg>
            )}

            <authStyled.InputBox mode={mode}>
              <p>비밀번호</p>
              <input type="password" onChange={onPasswordHandler} />
            </authStyled.InputBox>

            {validatePassword(password) && (
              <authStyled.Msg state={"success"}>
                알맞은 비밀번호 형식 입니다.
              </authStyled.Msg>
            )}

            <authStyled.InputBox mode={mode}>
              <p>비밀번호 확인</p>
              <input type="password" onChange={onCheckPasswordHandler} />
            </authStyled.InputBox>

            {validatePassword(password) && password === checkPassword && (
              <authStyled.Msg state={"success"}>
                비밀번호가 일치합니다.
              </authStyled.Msg>
            )}

            <authStyled.btn type="submit">회원가입</authStyled.btn>
          </form>
        </authStyled.LoginformWrap>
      </authStyled.AuthCon>
    </authStyled.AuthWrap>
  );
};

export default Register;
