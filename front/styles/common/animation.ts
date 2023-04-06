import { keyframes } from "styled-components";

export const SpinRight = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

export const SpinLeft = keyframes`
  100% {
      transform: rotate(-360deg);
  }
`;
