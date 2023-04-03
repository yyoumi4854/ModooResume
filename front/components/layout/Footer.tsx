import Image from "next/image";

import * as styled from "../../styles/components/layout/Footer";

import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <styled.FooterCon>
      <styled.TopCon>
        <h1>
          <Image src={logo} alt="모두의 이력서 로고" />
        </h1>

        <styled.ListWrap>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
        </styled.ListWrap>
      </styled.TopCon>

      <styled.BottomCon>
        <p>© 2023. modooResume all rights reserved.</p>
      </styled.BottomCon>
    </styled.FooterCon>
  );
};

export default Footer;
