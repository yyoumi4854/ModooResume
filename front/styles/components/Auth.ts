import styled from "styled-components";

export const AuthWrap = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  ${({ theme }) => theme.common.flexCenter}
  height: 100vh;
  background: ${({ theme, mode }) => theme.colors[mode].lightBg};
`;

export const AuthCon = styled.div<{ mode: "darkTheme" | "lightTheme" }>`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  padding: 88px 0;
  width: 640px;
  border-radius: 10px;
  background: ${({ theme, mode }) => theme.colors[mode].bg};

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
    font-size: ${({ theme }) => theme.fonts.size.small};
  }

  input {
    margin-top: 8px;
    padding: 10px 12px;
    width: 100%;
    border: 1px solid ${({ theme, mode }) => theme.colors[mode].border};
    border-radius: 4px;
    background: ${({ theme, mode }) => theme.colors[mode].lightBg};

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.lightMain};
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

export const Msg = styled.span<{ state: "warning" | "success" }>`
  display: block;
  margin-top: 12px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.size.small};
  line-height: ${({ theme }) => theme.fonts.lineHeight.base};
  color: ${({ theme, state }) => theme.colors[state]};
`;
