import React, { useEffect } from "react";
import styled from "styled-components";
import BottomNav from "../Components/Navbar/BottomNav";
import TopNav from "../Components/Navbar/TopNav";
import { XCircle } from "@styled-icons/heroicons-outline/XCircle";
import Login from "../Components/Login";
import MyPamas from "../Components/MyPamas";
import HiddenSearch from "../Components/HiddenSearch";
import { Search } from "@styled-icons/heroicons-solid/Search";
import { selectNav, selectSearch } from "../store/slices/navSlice";
import { useSelector } from "react-redux";
import { CubeTransparent } from "@styled-icons/heroicons-outline/CubeTransparent";
import SideNav from "./Navbar/SideNav/SideNav";
import { useSession } from "next-auth/react";

const hideMask = () => {
  const mask = document.getElementById("page-mask");
  mask.classList.contains("d-block") && mask.classList.remove("d-block");
};

const Navbar = ({ providers }) => {
  const { data: session } = useSession();
  const navStatus = useSelector(selectNav);
  const searchStatus = useSelector(selectSearch);
  const active = navStatus ? "active" : "";
  const searchActive = searchStatus ? "s_active" : "";
  useEffect(() => {
    const body = document.querySelector("body");
    const maskDiv = document.querySelector("#page-mask");
    if (active || searchActive) {
      body.classList.add("position-fixed");
      maskDiv.classList.add("d-block");
    } else {
      body.classList.remove("position-fixed");
      maskDiv.classList.remove("d-block");
    }
  }, [active, searchActive]);
  const handleShowNav = () => {
    hideMask();
    const p_div = document.getElementById("menu");
    p_div.classList.remove("show");
  };
  const handleShowSearch = () => {
    hideMask();
    const s_div = document.getElementById("searchDiv");
    s_div.classList.remove("show");
  };
  const hideProfile = () => {
    hideMask();
    const p_div = document.getElementById("profile");
    p_div.classList.remove("show");
  };
  return (
    <Nav className="sticky-top">
      <HiddenMenu className="menu" id="menu">
        <div className="wrapper__header">
          <div className="d-flex align-items-center gap-2">
            <CubeTransparent />
            <h6 className="mb-0">Shop your own way</h6>
          </div>
          <div className="close_x" onClick={handleShowNav}>
            <XCircle />
          </div>
        </div>
        <SideNav />
      </HiddenMenu>
      <HiddenSearchDiv className="searchDiv" id="searchDiv">
        <div className="wrapper__header">
          <div className="d-flex align-items-center gap-2">
            <Search />
            <h6 className="mb-0">Search and Save </h6>
          </div>
          <div className="close_x" onClick={handleShowSearch}>
            <XCircle />
          </div>
        </div>
        <div className="p-3">
          <HiddenSearch />
        </div>
      </HiddenSearchDiv>
      <div className="profile" id="profile">
        <div className="wrapper__header">
          <div className="d-flex align-items-center gap-2">
            <CubeTransparent />
            <h6 className="mb-0">My Pamas Zone</h6>
          </div>
          <div className="close_x" onClick={hideProfile}>
            <XCircle />
          </div>
        </div>
        {!session ? <Login providers={providers} /> : <MyPamas />}
      </div>
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
  position: fixed;
  top: 64px;
  width: 100%;
  max-width: 350px;
  height: calc(100vh - 64px);
  background: white;
  right: 0;
  z-index: 99;
  transition: all ease-in .3s;
  transform: translateX(100%);
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
  position: fixed;
  top: 64px;
  width: 100%;
  max-width: 350px;
  height: calc(100vh - 64px);
  background: white;
  left: 0;
  z-index: 89;
  transition: all ease-in 0.3s;
  transform: translateX(-100%);
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
