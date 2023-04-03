import styled from "styled-components";

export const NavCon = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    font-weight: 500;
  }
`;

export const Navli = styled.li<{ pathname: boolean }>`
  position: relative;
  padding: 20px 0;

  &:after {
    content: "";
    ${({ theme }) => theme.common.positionXCenter}
    top: inherit;
    bottom: 0;
    width: 24px;
    height: 4px;
    background: ${({ pathname, theme }) =>
      pathname ? theme.colors.blackText : "transparent"};
  }

  a {
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.grayText};
    }
  }

  ${({ theme }) => theme.device.mobile} {
    padding: 16px 0;
  }
`;
