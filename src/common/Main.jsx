import styled from "@emotion/styled";
import React from "react";
import HukLogo from "../assets/logo/HukLogo.png";

const MainContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const HukHukLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  min-width: 300px;
`;

const MemberContainer = styled.div`
  display: flex;
  gap: 1px;
  justify-content: flex-end;
  align-items: stretch;
  width: 1000px;
`;

const BrandName = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: "pretendard";
  font-weight: 900;
  transition: transform 0.5s ease;
  color: #02020242;
`;

const MemberSolo = styled.div`
  padding: 30px;
  display: flex;
  flex: 1;
  border: 1px solid #0c0c0c;
  transition: flex 0.3s ease;
  overflow: hidden;

  &:hover {
    flex: 2.5;
  }

  &:hover .brandName {
    transform: translateY(-350px);
  }
`;

export default function Main() {
  return (
    <MainContainer>
      <MainWrap>
        <HukHukLogo>
          <LogoImg src={HukLogo} alt="HukHuk's Logo"></LogoImg>
        </HukHukLogo>
        <MemberContainer>
          <MemberSolo>
            <BrandName className="brandName">Like Us</BrandName>
          </MemberSolo>
          <MemberSolo>
            <BrandName className="brandName">김형진</BrandName>
          </MemberSolo>
          <MemberSolo>
            <BrandName className="brandName">손시담</BrandName>
          </MemberSolo>
          <MemberSolo>
            <BrandName className="brandName">Cooolluck</BrandName>
          </MemberSolo>
        </MemberContainer>
      </MainWrap>
      <div></div>
    </MainContainer>
  );
}
