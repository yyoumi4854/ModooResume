import styled from "styled-components";
import { inner } from "../../common/css";

export const FooterCon = styled.footer<{ mode: "darkTheme" | "lightTheme" }>`
  border-top: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
  background: ${({ theme, mode }) => theme.colors[mode].bg};
`;

export const TopCon = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  height: 48px;
  ${inner}

  h1 {
    img {
      width: auto;
      height: 16px;
    }
  }

  ${({ theme }) => theme.device.mobile} {
    display: block;
    height: auto;
    padding-top: 24px;

    h1 {
      text-align: center;
    }
  }
`;

export const ListWrap = styled.ul`
  display: flex;
  gap: 44px;

  li:last-of-type {
    font-weight: 500;
  }

  ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.common.flexCenter}
    margin-top: 32px;
  }
`;

export const BottomCon = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  border-top: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
  padding: 24px;
  padding-bottom: 80px;

  p {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.grayText};
  }

  ${({ theme }) => theme.device.mobile} {
    padding: 40px 24px 80px 24px;
    border-top: 0;
    text-align: center;
  }
`;
