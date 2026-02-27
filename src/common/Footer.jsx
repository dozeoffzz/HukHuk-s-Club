import styled from "@emotion/styled";
import React from "react";
import HukLogo from "../assets/logo/HukLogo.png";
import InstaLogo from "../assets/sns/instagram.png";
import YoutubeLogo from "../assets/sns/youtube.png";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150px;
  border-top: 3px solid #0c0c0c;
`;

const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLogoConatainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const LogoImg = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

const FooterTitle = styled.span`
  font-family: "EF_jejudoldam";
`;

const FooterInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 18px;
  font-family: "pretendard";
  font-weight: 700;
`;

const DetailInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Copyright = styled.span`
  font-size: 21px;
  font-weight: 700;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <div>
          <FooterLogoConatainer>
            <LogoImg src={HukLogo} alt="HukHuk's Logo"></LogoImg>
            <FooterTitle>HUK HUK's Club</FooterTitle>
          </FooterLogoConatainer>
          <FooterInfo>
            <span>대한민국</span>
            <DetailInfo>
              <span>Phone:</span>
              <span>010-0000-0000</span>
            </DetailInfo>
            <DetailInfo>
              <span>Email:</span>
              <span>dozeoffzz247@gmail.com</span>
            </DetailInfo>
          </FooterInfo>
        </div>
        <div>
          <Copyright>&copy; HUK HUK's Club. All rights reserved.</Copyright>
        </div>
      </FooterWrap>
    </FooterContainer>
  );
}
