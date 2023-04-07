import styled from "styled-components";

export const UserList = styled.ul<{
  device: string;
  mode: "darkTheme" | "lightTheme";
}>`
  display: ${({ device }) => (device === "pc" ? "flex" : "none")};

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

  ${({ theme }) => theme.device.mobile} {
    display: ${({ device }) => (device === "pc" ? "none" : "flex")};
  }
`;
