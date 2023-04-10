import styled from "styled-components";

export const LogoWrap = styled.div`
  h1 a img {
    width: auto;
    height: 28px;
  }
`;

export const RegisterBox = styled.div`
  margin-top: 56px;
  a {
    ${({ theme }) => theme.common.flexCenter}
    gap: 16px;

    span {
      font-size: ${({ theme }) => theme.fonts.size.small};
      color: ${({ theme }) => theme.colors.grayText};

      &:last-of-type {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;
