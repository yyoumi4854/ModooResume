import { createContext } from "react";

import { IsDark } from "./type";

export const ThemeContext = createContext<IsDark | null>(null);
