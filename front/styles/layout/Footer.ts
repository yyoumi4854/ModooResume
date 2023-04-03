import styled from "styled-components";
import { inner } from "../common/css";

export const FooterCon = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.grayBd};
`;

export const TopCon = styled.div`
  display: flex;
  gap: 40px;
  padding: 18px 24px;

  h1 {
    img {
      width: auto;
      height: 16px;
    }
  }
`;

export const ListWrap = styled.ul`
  display: flex;
  gap: 44px;

  li:last-of-type {
    font-weight: 500;
  }
`;

export const BottomCon = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grayBd};
  ${inner}
  padding-top: 24px;

  p {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.grayText};
  }
`;
