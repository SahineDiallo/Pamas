import React from "react";
import styled from "styled-components";
import { Bookmark } from "@styled-icons/feather/Bookmark";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import NavLogo from "./NavLogo";

const TopNav = () => {
  return (
    <div>
      <Nav>
        <NavLogo />
        <NavRight>
          <NavOptions>
            <Bookmark />
            <span className="count">0</span>
          </NavOptions>
          <NavOptions>
            <ShoppingCart />
            <span className="count">0</span>
          </NavOptions>
        </NavRight>
      </Nav>
    </div>
  );
};

export default TopNav;

const Nav = styled.div`
  border-bottom: 1px solid black;
  border-top: 3px solid #003e29;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 0px;
`;

const NavOptions = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  position-relative;
    svg {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    margin-top: 10px;
    position: relative;
  }

  ::before {
    content: "";
    width: 1px;
    height: 10px;
    background: black;
    position: absolute;
    bottom: -3px;
    left: 0;
  }
`;
const NavFirstOption = styled.div``;
const NavSecondOption = styled.div``;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
