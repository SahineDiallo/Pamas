import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/feather/Heart";
import { Plus } from "@styled-icons/feather/Plus";
import NavLogo from "./NavLogo";
import { User } from "@styled-icons/feather/User/";
import Link from "next/link";
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { Search } from "@styled-icons/heroicons-solid/Search";
import { useDispatch } from "react-redux";
import {
  showNav,
  showSearch,
  hideNav,
  hideSearch,
} from "../../store/slices/navSlice";

const TopNav = () => {
  const dispatch = useDispatch();
  const handleShowNav = () => {
    dispatch(hideSearch());
    window.innerWidth <= 768 && dispatch(showNav());
  };
  const handleShowSearch = () => {
    dispatch(hideNav());
    window.innerWidth <= 768 && dispatch(showSearch());
  };
  return (
    <div>
      <Nav className="mb-0 text-white ">
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
          <Search onClick={handleShowSearch} />
        </div>
        {/* middle nav */}
        <NavLogo />

        {/* right nav */}
        <NavRight>
          <NavOptions onClick={handleShowNav}>
            <Menu />
            <div className="d-md-flex d-none flex-column">
              <NavFirstOption>
                <small>Watching</small>
              </NavFirstOption>
              <NavSecondOption>
                23 <small className="">items</small>
              </NavSecondOption>
            </div>
          </NavOptions>
          <Link href="/create-product">
            <NavOptions className="d-none d-md-flex">
              <Plus />
              <div className="d-md-flex d-none flex-column">
                <NavFirstOption>
                  <small>Add</small>
                </NavFirstOption>
                <NavSecondOption>
                  <small>Product</small>
                </NavSecondOption>
              </div>
            </NavOptions>
          </Link>
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
  padding-left: 1rem;
  position-relative;
  display: flex;
  align-items: flex-start;
  transition: all ease-in .4s;
  gap: 5px;
    svg {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    position: relative;
  }

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
