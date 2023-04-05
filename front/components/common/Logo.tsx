import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeContext } from "../../context/themeContext";
import { IsDark } from "../../context/type";

import logo from "../../public/logo.svg";
import logoDark from "../../public/logo_dark.svg";

const Logo = () => {
  const { isDark } = useContext(ThemeContext) as IsDark;

  return (
    <h1>
      <Link href="/">
        <Image src={isDark ? logoDark : logo} alt="모두의 이력서 로고" />
      </Link>
    </h1>
  );
};

export default Logo;
