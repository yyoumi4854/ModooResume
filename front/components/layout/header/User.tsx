import Link from "next/link";

import * as Styled from "../../../styles/components/layout/header/User";

interface Props {
  device: string;
}

const User = ({ device }: Props) => {
  console.log(device);
  return (
    <Styled.UserList device={device}>
      <li>
        <Link href="/Login">로그인</Link>
      </li>
      <li>
        <Link href="/Register">회원가입</Link>
      </li>
    </Styled.UserList>
  );
};

export default User;
