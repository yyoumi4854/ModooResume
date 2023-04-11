import {
  BaseSyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from "recoil";

import { ThemeContext } from "../../../context/themeContext";
import { IsDark } from "../../../context/type";
import { userAtom } from "../../../recoil/user";

import * as Styled from "../../../styles/components/layout/header/User";

interface Props {
  device: string;
}

const User = ({ device }: Props) => {
  const [user, setUser] = useRecoilState(userAtom);

  const router = useRouter();

  const { isDark } = useContext(ThemeContext) as IsDark;
  const mode = isDark ? "darkTheme" : "lightTheme";

  const modalBtnRef = useRef<HTMLButtonElement>(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener("click", modalHandle);

    return () => {
      window.addEventListener("click", modalHandle);
    };
  });

  const modalHandle = (e: BaseSyntheticEvent | MouseEvent) => {
    // BaseSyntheticEvent : 합성이벤트
    if (modalBtnRef.current) {
      const target = modalBtnRef.current.contains(e.target);

      !target && setModal(false);
    }
  };

  const onClickHandler = () => {
    setUser(null);
    router.replace("/");
  };

  return (
    <Styled.UserCon device={device}>
      {user ? (
        <Styled.profileCon>
          <button ref={modalBtnRef} onClick={() => setModal(!modal)}>
            <span>{user.nickName}</span>
            <span>님</span>
          </button>

          {modal && (
            <Styled.UserList mode={mode}>
              <ul>
                <li>
                  <button onClick={onClickHandler}>로그아웃</button>
                </li>
              </ul>
            </Styled.UserList>
          )}
        </Styled.profileCon>
      ) : (
        <Styled.AuthList mode={mode}>
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
        </Styled.AuthList>
      )}
    </Styled.UserCon>
  );
};

export default User;
