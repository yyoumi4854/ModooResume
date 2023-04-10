import styled from "styled-components";

export const UserCon = styled.div<{
  device: string;
}>`
  display: ${({ device }) => (device === "pc" ? "flex" : "none")};

  ${({ theme }) => theme.device.mobile} {
    display: ${({ device }) => (device === "pc" ? "none" : "flex")};
  }
`;

export const profile = styled.img``;

export const UserList = styled.ul<{ mode: "darkTheme" | "lightTheme" }>`
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
