import styled from "styled-components";
import { SpinLeft, SpinRight } from "../../common/animation";

export const FloatCon = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 8px;

  button {
    width: 36px;
    height: 36px;
    border: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
    border-radius: 50%;
    background: ${({ theme, mode }) => theme.colors[mode].bg};
    transition: all 0.3s;

    &:hover {
      background: ${({ theme, mode }) => theme.colors[mode].lightBg};
    }
  }

  button:first-of-type {
    animation: ${({ mode }) => (mode === "darkTheme" ? SpinRight : SpinLeft)} 1s;

    svg {
      width: 20px;
      transform: rotation;
    }
  }
`;
