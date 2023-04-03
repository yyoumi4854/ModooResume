import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const Global = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
    outline: none;
  }

  html, input, select, textarea{
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme.colors.blackText};
  }
`;

export default Global;
