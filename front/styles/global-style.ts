import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
  ${normalize}

  *{
    box-sizing: border-box;
    outline: none;
  }
`;

export default Global;
