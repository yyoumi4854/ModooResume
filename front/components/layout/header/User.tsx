import { useContext } from "react";
import Link from "next/link";

import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";

import * as Styled from "../../../styles/components/layout/header/User";

interface Props {
  device: string;
}

const User = ({ device }: Props) => {
  const { isDark } = useContext(ThemeContext) as IsDark;

  return (
    <Styled.UserList device={device} mode={isDark ? "darkTheme" : "lightTheme"}>
      <li>
        <Link
          href={{ pathname: "/Login", query: { header: "N" } }}
          as="/auth/login"
        >
          로그인
        </Link>
      </li>
      <li>
        <Link href="/Register" as="/auth/register">
          회원가입
        </Link>
      </li>
    </Styled.UserList>
  );
};

export default User;
