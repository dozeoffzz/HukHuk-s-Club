import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import InstaLogo from "../assets/sns/instagram.png";
import YoutubeLogo from "../assets/sns/youtube.png";

const HeaderContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "pretendard";
  font-weight: 800;
`;
const HeaderAbout = styled.div`
  display: flex;
  gap: 40px;
  font-size: 21px;
  font-weight: 800;
`;

const ProductBtn = styled.button`
  font-size: 21px;
  font-weight: 800;
  background-color: transparent;
`;

const HeaderMain = styled.div`
  font-size: 32px;
  font-weight: 800;
  font-family: "EF_jejudoldam";
`;

const SnsImg = styled.img`
  height: 60px;
`;

const HeaderSns = styled(HeaderAbout)``;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderAbout>
        <NavLink>BRAND STORY</NavLink>
      </HeaderAbout>
      <HeaderMain>
        <NavLink>HukHuk's CLUB</NavLink>
      </HeaderMain>
      <HeaderSns>
        <NavLink>
          <SnsImg src={InstaLogo} alt="instagram" />
        </NavLink>
        <NavLink>
          <SnsImg src={YoutubeLogo} alt="youtube" />
        </NavLink>
      </HeaderSns>
    </HeaderContainer>
  );
}
