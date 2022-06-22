import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/feather/Heart";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import NavLogo from "./NavLogo";
import { User } from "@styled-icons/feather/User/";
import Link from "next/link";
import Image from 'next/image';

const TopNav = () => {
  return (
    <div>
      <Nav className="mb-0 mb-md-3">
        <Link href="/">
          <NavLogo />
        </Link>
        <NavRight>
          <NavOptions>
            <User />
            <div className="">
              <NavFirstOption>
                <small>Hello</small>
              </NavFirstOption>
              <NavSecondOption>SignIn Now</NavSecondOption>
            </div>
          </NavOptions>
          <NavOptions>
            <Heart />
            <span className="count d-md-none d-block">0</span>
            <div className="d-md-flex d-none flex-column">
              <NavFirstOption>
                <small>Watching</small>
              </NavFirstOption>
              <NavSecondOption>
                23 <small className="text-muted ">items</small>
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
  display: flex;
  align-items: center;
  transition: all ease-in .4s;
  gap: 5px;
    svg {
    height: 1.5rem;
    width: .1.5rem;
    cursor: pointer;
    margin-top: 15px;
    position: relative;
  }


  ::before {
    content: "";
    width: 1px;
    height: 10px;
    background: black;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
  @media screen and (min-width:768px) {
    svg {
      width: 2rem;
      height: 2rem;
    }

    ::before {
      content: "";
      bottom: 0;
    }
  }
`;
const NavFirstOption = styled.div`
  line-height: 1;
  margin-top: 5px;
`;
const NavSecondOption = styled.div`
  font-weight: 600;
  margin-bottom: 0;
  line-height: 1;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
