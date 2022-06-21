import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/feather/Menu";
import { MapPin } from "@styled-icons/feather/MapPin";
import { useDispatch } from "react-redux";
import { showNav } from "../../store/slices/navSlice";

const BottomNav = () => {
  const dispatch = useDispatch();
  const handleShowNav = () => {
    dispatch(showNav());
  };
  return (
    <>
      <ParentDiv>
        <NavFirstOption>
          <MapPin />
          <small className="">Deliver to mauritania</small>
        </NavFirstOption>
        <div className="bottom__nav">
          <Menu onClick={handleShowNav} />
        </div>
      </ParentDiv>
    </>
  );
};

export default BottomNav;

const ParentDiv = styled.div`
  height: 2.5rem;
  background: #003e29;
  color: white;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottom__nav svg {
    height: 2rem;
    width: 2rem;
    color: white;
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
    height: 2rem;
    width: 2rem;
  }
`;
