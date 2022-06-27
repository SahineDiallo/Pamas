import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { CubeTransparent } from "@styled-icons/heroicons-outline/CubeTransparent";

const NavLogo = () => {
  return (
    <Logo>
      {/* <img
        width={50}
        height={50}
        object-fit="contain"
        src="/mainLogo.png"
        alt="logo"
      /> */}
      <CubeTransparent />
      <LogoName>
        <h1>Pamas</h1>
        {/* <small>market</small> */}
      </LogoName>
    </Logo>
  );
};

export default NavLogo;

const Logo = styled.div`
  font-family: "Rubik Moonrocks";
  display: flex;
  align-items: flex-center;
  flex-grow: 2;
  justify-content: center;
  svg {
    height: 45px;
    margin-right: -5px;
  }
`;
const LogoName = styled.div`
  margin-left: 7px;
  h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: white;
    margin-top: 5px;
  }
`;
