import { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import { IsDark } from "../../context/type";

import * as styled from "../../styles/components/layout/Float";

import { Moon, Sun } from "@styled-icons/heroicons-solid";
import { ChevronUp } from "@styled-icons/boxicons-regular";

const Float = () => {
  const { isDark, setIsDark } = useContext(ThemeContext) as IsDark;

  const handlerIsDarkClick = () => {
    if (isDark) {
      localStorage.removeItem("isDark");
    } else {
      localStorage.setItem("isDark", "Y");
    }
    setIsDark(!isDark);
  };

  return (
    <styled.FloatCon mode={isDark ? "darkTheme" : "lightTheme"}>
      <button onClick={handlerIsDarkClick}>
        {isDark ? <Sun /> : <Moon />}
      </button>
      <button>
        <ChevronUp />
      </button>
    </styled.FloatCon>
  );
};

export default Float;
