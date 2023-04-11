import styled from "styled-components";

export const UserCon = styled.div<{
  device: string;
}>`
  display: ${({ device }) => (device === "pc" ? "flex" : "none")};

  ${({ theme }) => theme.device.mobile} {
    display: ${({ device }) => (device === "pc" ? "none" : "flex")};
  }
`;

export const profileCon = styled.div`
  position: relative;
  & > button {
    span:first-of-type {
      font-weight: 700;
    }
    span:last-of-type {
      color: ${({ theme }) => theme.colors.grayText};
    }
  }
`;

export const UserList = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  position: absolute;
  right: 0;
  top: 32px;
  padding: 8px;
  width: 176px;
  border: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
  border-radius: 4px;
  background: ${({ theme, mode }) => theme.colors[mode].bg};

  ul li {
    height: 48px;

    button {
      width: 100%;
      height: 100%;
    }

    & > * {
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }
`;

export const AuthList = styled.ul<{ mode: "darkTheme" | "lightTheme" }>`
  ${({ theme }) => theme.common.flexCenter}

  li {
    padding: 0 8px;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fonts.size.small};
  }

  li:nth-of-type(2n) {
    border-left: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
  }

  a {
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;
