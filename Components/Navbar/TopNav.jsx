import React from "react";
import styled from "styled-components";
import { Plus } from "@styled-icons/heroicons-solid/Plus";
import NavLogo from "./NavLogo";
import { User } from "@styled-icons/heroicons-solid/User/";
import Link from "next/link";
import { MenuAlt1 } from "@styled-icons/heroicons-solid/MenuAlt1";
import { Search } from "@styled-icons/heroicons-solid/Search";
import { useSession } from "next-auth/react";

const showMask = () => {
  const mask = document.getElementById("page-mask");
  mask.classList.add("d-block");
};
const TopNav = () => {
  const { data: session } = useSession();
  const handleShowNav = () => {
    const div = document.getElementById("menu");
    const p_div = document.getElementById("profile");
    const s_div = document.getElementById("searchDiv");
    p_div.classList.contains("show") && p_div.classList.remove("show");
    s_div.classList.contains("show") && s_div.classList.remove("show");
    div.classList.add("show");
    showMask();
  };
  const handleShowSearch = () => {
    const s_div = document.getElementById("searchDiv");
    const m_div = document.getElementById("menu");
    const p_div = document.getElementById("profile");
    m_div.classList.contains("show") && m_div.classList.remove("show");
    p_div.classList.contains("show") && p_div.classList.remove("show");
    s_div.classList.add("show");
    showMask();
  };
  const handleShowProfile = () => {
    const p_div = document.getElementById("profile");
    const m_div = document.getElementById("menu");
    const s_div = document.getElementById("searchDiv");
    m_div.classList.contains("show") && m_div.classList.remove("show");
    s_div.classList.contains("show") && s_div.classList.remove("show");
    p_div.classList.add("show");
    showMask();
  };
  return (
    <div>
      <Nav className="mb-0 text-white row mx-0">
        <div className="nav-left d-flex align-items-center col-4">
          <NavOptions className="d-none d-md-flex" onClick={handleShowProfile}>
            <User />
            <div className="ml-3">
              <NavFirstOption>
                <small>Hello</small>
              </NavFirstOption>
              <NavSecondOption>
                {session ? session.user.name : "SignIn Now"}
              </NavSecondOption>
            </div>
          </NavOptions>
          <NavOptions>
            <Search onClick={handleShowSearch} />
          </NavOptions>
        </div>
        <div className="col-4">
          <NavLogo />
        </div>

        {/* right nav */}
        <div className="col-4">
          <NavRight>
            <NavOptions onClick={handleShowNav}>
              <MenuAlt1 />
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
              <NavOptions className="d-none d-md-flex cursor-pointer">
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
        </div>
      </Nav>
    </div>
  );
};

export default TopNav;

const Nav = styled.div`
  background: #008339;
  // border-bottom: 1px solid black;
  align-items: center;
  padding: 10px;

  .nav-left svg {
    width: 2rem;
    height: 2rem;
  }
`;

const NavOptions = styled.div`
  position: relative;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
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
