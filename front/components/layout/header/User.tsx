import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";

import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";
import { userAtom } from "../../../recoil/user";

import * as Styled from "../../../styles/components/layout/header/User";

interface Props {
  device: string;
}

const User = ({ device }: Props) => {
  const user = useRecoilValue(userAtom);

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  return (
    <Styled.UserCon device={device}>
      {user ? (
        <>
          <Image src="" alt={user.nickName} />
        </>
      ) : (
        <Styled.UserList mode={mode}>
          <li>
            <Link
              href={{ pathname: "/Login", query: { header: "N" } }}
              as="/auth/login"
            >
              로그인
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: "/Register", query: { header: "N" } }}
              as="/auth/register"
            >
              회원가입
            </Link>
          </li>
        </Styled.UserList>
      )}
    </Styled.UserCon>
  );
};

export default User;
