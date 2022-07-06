import React, { useEffect } from "react";
import styled from "styled-components";
import BottomNav from "../Components/Navbar/BottomNav";
import TopNav from "../Components/Navbar/TopNav";
import { XCircle } from "@styled-icons/feather/XCircle";
import NavLogo from "../Components/Navbar/NavLogo";
import { Search } from "@styled-icons/heroicons-solid/Search";
import { selectNav, hideNav, hideSearch, selectSearch } from "../store/slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import { CubeTransparent } from "@styled-icons/heroicons-outline/CubeTransparent";
import SideNav from "./Navbar/SideNav/SideNav";
import Link from "next/link";
import SearchNav from "./Navbar/SearchArea";

const Navbar = () => {
  const dispatch = useDispatch();
  const navStatus = useSelector(selectNav);
  const searchStatus = useSelector(selectSearch);
  const active = navStatus ? "active" : "";
  const searchActive = searchStatus ? "s_active" : "";

  useEffect(() => {
    const body = document.querySelector("body");
    active
      ? body.classList.add("position-fixed")
      : body.classList.remove("position-fixed");
  }, [active]);
  const handleShowNav = () => {
    dispatch(hideNav());
  };
  const handleShowSearch = () => {
    dispatch(hideSearch());
  };
  return (
    <Nav className="sticky-top entire-nav">
      <HiddenMenu className={`${active} hidden-menu`}>
        <div className="wrapper__header">
          <div className="d-flex align-items-center gap-2">
            <CubeTransparent />
            <h6 className="mb-0">Shop your own way</h6>
          </div>
          <div className="close_x" onClick={handleShowNav}>
            <XCircle />
          </div>
        </div>
        <SearchNav />
        <SideNav />
      </HiddenMenu>
      <HiddenSearchDiv className={`${searchActive}`}>
        <div className="wrapper__header">
          <div className="d-flex align-items-center gap-2">
            <Search />
            <h6 className="mb-0">Search and Save </h6>
          </div>
          <div className="close_x" onClick={handleShowSearch}>
            <XCircle />
          </div>
        </div>
        <p> search by wahtever you wnat</p>
      </HiddenSearchDiv>
      <TopNav />
      <BottomNav />
    </Nav>
  );
};

export default Navbar;
const Nav = styled.div`
  div.active {
    transform: translateX(0%) !important;
  }
  div.s_active {
    height: calc(100vh - 60px) !important;
  }
`;
const HiddenMenu = styled.div`
  position: absolute;
  top: 64px;
  width: 100%;
  height: calc(100vh - 64px);
  background: white;
  left: 0;
  z-index: 99;
  transition: all ease-in .4s;
  overflow-y: auto;
  .wrapper__header {
    color: white;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
    padding-right: 10px;
    padding-left: 10px;
    height: 3.5rem;
    background: #e4611b;
    line-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .close_x svg {
      width: 2.5rem;
      heigth: 2.5rem;
    }
    svg {
      height: 2.5rem;

    }
  }
}
`;
const HiddenSearchDiv = styled.div`
  position: absolute;
  top: 64px;
  width: 100%;
  height: 0;
  background: white;
  right: 0;
  z-index: 89;
  transition: all ease-in 0.4s;
  overflow-y: auto;
  .wrapper__header {
    color: white;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
    padding-right: 10px;
    padding-left: 10px;
    height: 3.5rem;
    background: #e4611b;
    line-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .close_x svg {
      width: 2.5rem;
      heigth: 2.5rem;
    }
    svg {
      height: 2.5rem;
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
