import styled from "styled-components";

export const LoginWrap = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  ${({ theme }) => theme.common.flexCenter}
  height: 100vh;
  background: ${({ theme, mode }) => theme.colors[mode].lightBg};
`;

export const LoginCon = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  padding: 88px 0;
  width: 640px;
  border-radius: 10px;
  background: ${({ theme, mode }) => theme.colors[mode].bg};

  h1 a img {
    width: auto;
    height: 28px;
  }

  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100vh;
    padding: 28px 24px;
  }
`;

export const LoginformWrap = styled.div`
  margin-top: 48px;
  width: 320px;

  form {
    width: 100%;
  }
`;

export const InputBox = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  margin-top: 16px;

  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  input {
    margin-top: 8px;
    padding: 10px 12px;
    width: 100%;
    border: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
    border-radius: 4px;
    background: ${({ theme, mode }) => theme.colors[mode].lightBg};

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.main};
    }
  }
`;

export const btn = styled.button`
  display: block;
  margin-top: 36px;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.lightTheme.bg};
  transition: all 0.1s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightMain};
  }
`;

export const RegisterBox = styled.div`
  margin-top: 56px;
  a {
    ${({ theme }) => theme.common.flexCenter}
    gap: 16px;

    span {
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => theme.colors.grayText};

      &:last-of-type {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;
