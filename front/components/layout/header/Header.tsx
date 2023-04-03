import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import User from "./User";

import * as styled from "../../../styles/components/layout/header/Header";

import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <styled.HeaderCon>
      <styled.TopCon>
        <h1>
          <Link href="/">
            <Image src={logo} alt="모두의 이력서 로고" />
          </Link>
        </h1>
        <User device={"mobile"} />
      </styled.TopCon>

      <styled.RightCon>
        <Nav />
        <User device={"pc"} />
      </styled.RightCon>
    </styled.HeaderCon>
  );
};

export default Header;
