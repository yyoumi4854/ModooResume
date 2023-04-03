import Link from "next/link";
import { useRouter } from "next/router";

import * as styled from "../../../styles/components/layout/header/Nav";

const Nav = () => {
  const router = useRouter();
  // console.log(router);
  // router.pathname

  return (
    <styled.NavCon>
      <ul>
        <styled.Navli pathname={router.pathname === "/"}>
          <Link href="/">발견</Link>
        </styled.Navli>
        <styled.Navli pathname={router.pathname === "/Resume"}>
          <Link href="/Resume">이력서</Link>
        </styled.Navli>
      </ul>
    </styled.NavCon>
  );
};

export default Nav;
