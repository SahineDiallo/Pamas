import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { CubeTransparent } from "@styled-icons/heroicons-outline/CubeTransparent";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/">
      <Logo>
        <CubeTransparent />
        <LogoName>
          <h1>Pamas</h1>
          {/* <small>market</small> */}
        </LogoName>
      </Logo>
    </Link>
  );
};

export default NavLogo;

const Logo = styled.div`
  font-family: "Rubik Moonrocks";
  display: flex;
  cursor: pointer;
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
  margin-top: 4px;
  h1 {
    margin: 0;
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    color: white;
    line-height: 1;
  }
`;
