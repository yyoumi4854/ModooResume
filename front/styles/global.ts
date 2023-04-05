import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const Global = createGlobalStyle<{ mode: "lightTheme" | "darkTheme" }>`
  ${reset}

  *{
    box-sizing: border-box;
    outline: none;
  }

  body, input, select, textarea{
    background: ${({ theme, mode }) => theme.colors[mode].bg};
    color: ${({ theme, mode }) => theme.colors[mode].text};
    letter-spacing: -0.05em;
  }

  a{
    text-decoration: none;
    color: ${({ theme, mode }) => theme.colors[mode].text};
  }

  button{
    padding: 0;
    background: transparent;
    border: 0;
    color: ${({ theme, mode }) => theme.colors[mode].text};
    font-size: ${({ theme }) => theme.fontSizes.basicsDesktop};
    cursor: pointer;
  }
`;

export default Global;
