import styled from "styled-components";

export const TitleWrap = styled.div`
  text-align: center;

  h1 a img {
    width: auto;
    height: 16px;
  }

  h2 {
    margin-top: 16px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.size.title};
  }
`;
