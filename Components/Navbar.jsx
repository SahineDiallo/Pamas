import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BottomNav from "../Components/Navbar/BottomNav";
import TopNav from "../Components/Navbar/TopNav";
import { XCircle } from "@styled-icons/feather/XCircle";
import NavLogo from "../Components/Navbar/NavLogo";
import { selectNav, hideNav } from "../store/slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SideNav from "./Navbar/SideNav/SideNav";
import Link from "next/link";
import SearchNav from "./Navbar/SearchArea";

const Navbar = () => {
  const dispatch = useDispatch();
  const navStatus = useSelector(selectNav);
  const active = navStatus ? "active" : "";

  useEffect(() => {
    const body = document.querySelector("body");
    active
      ? body.classList.add("position-fixed")
      : body.classList.remove("position-fixed");
  }, [active]);
  const handleShowNav = () => {
    dispatch(hideNav());
  };
  return (
    <Nav>
      <HiddenMenu className={`${active}`}>
        <div className="wrapper__header">
          <NavLogo />
          <div className="close_x" onClick={handleShowNav}>
            <XCircle />
          </div>
        </div>
        <SearchNav />
        <SideNav />
      </HiddenMenu>
      <TopNav />
      <div className="d-lg-none">
        <SearchNav />
      </div>
      <BottomNav />
    </Nav>
  );
};

export default Navbar;
const Nav = styled.div`
  position: relative;
  div.active {
    transform: translateX(0%) !important;
  }
`;
const HiddenMenu = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: white;
  left: 0;
  z-index: 99;
  transition: all ease-in .4s;
  transform: translateX(-120%);
  overflow-y: auto;
  .wrapper__header {
    box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
    padding-right: 10px;
    padding-left: 10px;
    height: 5rem;
    background: white;
    line-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .close_x svg {
      width: 2.5rem;
      heigth: 2.5rem;
    }
  }
}
`;

const NavFirstOption = styled.div`
  line-height: 1;
`;
const NavSecondOption = styled.div`
  font-weight: 600;
  margin-bottom: 0;
  line-height: 1;
`;
