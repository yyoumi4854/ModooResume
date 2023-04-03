import styled from "styled-components";
import { inner } from "../../../common/css";

export const HeaderCon = styled.header`
  display: flex;
  align-items: center;
  gap: 40px;
  position: sticky;
  top: 0;
  left: 0;
  ${inner}
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBd};
  background: #fff;

  ${({ theme }) => theme.device.mobile} {
    display: block;

    h1 {
      padding: 16px 0;
      img {
        width: auto;
        height: 18px;
      }
    }
  }
`;

export const TopCon = styled.div`
  ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.common.flexBetween}
  }
`;

export const RightCon = styled.div`
  ${({ theme }) => theme.common.flexBetween}
  width: 100%;
`;
