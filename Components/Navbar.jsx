import React from "react";
import styled from "styled-components";
import BottomNav from "../Components/Navbar/BottomNav";
import TopNav from "../Components/Navbar/TopNav";
import { XCircle } from "@styled-icons/feather/XCircle";
import NavLogo from "../Components/Navbar/NavLogo";
import { selectNav, hideNav } from "../store/slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "@styled-icons/feather/Search";
import SideNav from "./Navbar/SideNav/SideNav";

const Navbar = () => {
  const dispatch = useDispatch();
  const navStatus = useSelector(selectNav);
  const active = navStatus ? "active" : "";
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
        <SearchArea>
          <input type="text" />
          <button>Search</button>
        </SearchArea>
        <SideNav />
      </HiddenMenu>
      <TopNav />
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
  transition: all ease-in .3s;
  transform: translateX(-100%);

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

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  width: 94%;
  height: 2.5rem;
  padding: 5px 0 5px;
  margin: 10px auto;
  border: 1px solid #003e29;
  border-radius: 5px;
  position: relative;
  input {
    flex-grow: 1;
    height: 2.2rem;
    border-radius: 5px;
    border-color: #003e29;
    outline: none;
    transition: all ease-out 0.4s;
    padding-left: 10px;
    border: none;
    :focus {
      box-shadow: 0 0 0 3px #003e29;
    }
  }
  button {
    width: fit-content;
    position: absolute;
    background: #003e29;
    right: 10px;
    height: 1.8rem;
    padding: 0 10px;
    border-radius: 0;
    color: white;
    border: none;
    outline: none;
    position: absolute;
    color: white;
    border-radius: 3px;
  }
`;
