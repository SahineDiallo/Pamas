import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/feather/Menu";
import { MapPin } from "@styled-icons/feather/MapPin";
import { useDispatch } from "react-redux";
import { showNav } from "../../store/slices/navSlice";

const BottomNav = () => {
  const dispatch = useDispatch();
  const handleShowNav = () => {
    window.innerWidth <= 768
      ? dispatch(showNav())
      : console.log("show all possible filters");
  };
  return (
    <>
      <ParentDiv className="justify-content-md-center">
        <NavFirstOption className="d-flex d-md-none">
          <MapPin />
          <small className="">Deliver to mauritania</small>
        </NavFirstOption>
        <div className="bottom__nav d-md-flex align-items-center gap-4">
          <div onClick={handleShowNav}>
            <Menu />
            <span className="text-bold ml-2 d-none d-md-inline">
              Categories
            </span>
          </div>
          <div className="categories flex-grow-1 m-auto d-none d-md-flex align-items-center gap-3">
            <span>Electronics</span>
            <span>Fournitures</span>
            <span>Shoes</span>
            <span>Computers&Laptops</span>
            <span>Accessories</span>
          </div>
        </div>
      </ParentDiv>
    </>
  );
};

export default BottomNav;

const ParentDiv = styled.div`
  height: 2.5rem;
  background: #fff;
  border-bottom: 3px solid #004f22;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  color: #004f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottom__nav svg {
    height: 2rem;
    width: 2rem;
  }
`;
const NavFirstOption = styled.div`
  display: flex;
  align-items: center;
  small {
    font-weight: 500;
    letter-spacing: 0.02rem;
    margin-left: 5px;
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
