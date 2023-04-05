import { Dispatch, SetStateAction } from "react";

export interface IsDark {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
