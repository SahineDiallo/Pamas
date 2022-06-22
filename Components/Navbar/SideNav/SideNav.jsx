import React from "react";
import styled from "styled-components";
import { Globe } from "@styled-icons/feather/Globe";
import { Github } from "@styled-icons/feather/Github";
import { Facebook } from "@styled-icons/feather/Facebook";
import { Mail } from "@styled-icons/feather/Mail";
import { LogIn } from "@styled-icons/feather/LogIn";
import { LogOut } from "@styled-icons/feather/LogOut";
import { UserPlus } from "@styled-icons/feather/UserPlus";

const SideNav = () => {
  return (
    <SideContainer>
      <SectionNav>
        <h3>Account</h3>
        <p>
          <LogIn />
          Login
        </p>
        <p>
          <UserPlus />
          Register
        </p>
      </SectionNav>
      <SectionNav className="flex-grow-1">
        <h3>Store</h3>
        <ul className="list-unstyled d-flex flex-column gap-3 justify-content-center">
          <li>
            <a href="">SmartPhones</a>
          </li>
          <li>
            <a href="">Computers & Laptops</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Shoes</a>
          </li>
        </ul>
      </SectionNav>
      <SectionNav>
        <h3>Socials</h3>
        <SocialLinks>
          <Facebook />
          <Github />
          <Globe />
          <Mail />
        </SocialLinks>
      </SectionNav>
    </SideContainer>
  );
};

export default SideNav;

const SectionNav = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
  h3 {
    font-size: 17px;
    font-width: 700;
    color: #ccc;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 7px !important;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  p svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  ul li {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }
  ul li a {
    font-size: 14px;
    color: black;
    position: relative;
    padding: 0 15px;
  }
  ul li a::before {
    content: "▶";
    color: #ccc;
    display: block;
    position: absolute;
    top: 0px;
    font-size: 12px;
`;
const SideContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    width: 2rem;
    height: 2rem;
    transition: all ease-in 0.3s;
  }
  svg:hover {
    color: #003e29;
    transform: scale(1.1);
  }
`;
