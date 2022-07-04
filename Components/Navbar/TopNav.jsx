import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/feather/Heart";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import NavLogo from "./NavLogo";
import { User } from "@styled-icons/feather/User/";
import Link from "next/link";
import Image from "next/image";
import SearchNav from "./SearchArea";
import { Search } from "@styled-icons/feather/Search";
import { ChevronDown } from "@styled-icons/feather/ChevronDown";

const TopNav = () => {
  return (
    <div>
      <Nav className="mb-0 text-white ">
        {/* <div className="d-none d-lg-block flex-grow-1 mx-2">
          <SearchNav />
        </div> */}
        <div className="nav-left d-flex align-items-center">
          <NavOptions className="d-none d-md-flex">
            <User />
            <div className="">
              <NavFirstOption>
                <small>Hello</small>
              </NavFirstOption>
              <NavSecondOption>SignIn Now</NavSecondOption>
            </div>
          </NavOptions>
          <Search />
        </div>
        {/* middle nav */}
        <NavLogo />

        {/* right nav */}
        <NavRight>
          <NavOptions>
            <Link href="/create-product">
            <button> add New Product</button>
            </Link>
          </NavOptions>
          <NavOptions>
            <Heart />
            <span className="count d-md-none d-block">0</span>
            <div className="d-md-flex d-none flex-column">
              <NavFirstOption>
                <small>Watching</small>
              </NavFirstOption>
              <NavSecondOption>
                23 <small className="">items</small>
              </NavSecondOption>
            </div>
          </NavOptions>
          <NavOptions>
            <ShoppingCart />
            <span className="count">0</span>
            <div className="d-md-flex d-none flex-column">
              <NavFirstOption>
                <small>Cart</small>
              </NavFirstOption>
              <NavSecondOption>
                100<small>MRU</small>
              </NavSecondOption>
            </div>
          </NavOptions>
        </NavRight>
      </Nav>
    </div>
  );
};

export default TopNav;

const Nav = styled.div`
  background: #008339;
  // border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .nav-left svg {
    width: 2rem;
    height: 2rem;
  }
`;

const NavOptions = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  position-relative;
  display: flex;
  align-items: flex-start;
  transition: all ease-in .4s;
  gap: 5px;
    svg {
    height: 1.5rem;
    width: .1.5rem;
    cursor: pointer;
    position: relative;
  }


  // ::before {
  //   content: "";
  //   width: 1px;
  //   height: 10px;
  //   background: white;
  //   position: absolute;
  //   bottom: -5px;
  //   left: 0;
  // }
  @media screen and (min-width:768px) {
    svg {
      width: 2rem;
      height: 2rem;
    }

    ::before {
      content: "";
      bottom: -3px;
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
const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
