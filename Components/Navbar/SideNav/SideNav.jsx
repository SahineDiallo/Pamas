import React from "react";
import styled from "styled-components";
import { Globe } from "@styled-icons/feather/Globe";
import { Github } from "@styled-icons/feather/Github";
import { Facebook } from "@styled-icons/feather/Facebook";
import { Mail } from "@styled-icons/feather/Mail";
import { LogIn } from "@styled-icons/feather/LogIn";
import { LogOut } from "@styled-icons/feather/LogOut";
import { UserPlus } from "@styled-icons/feather/UserPlus";
import { Plus } from "@styled-icons/heroicons-solid/Plus";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const SideNav = () => {
  const { data: session } = useSession();
  return (
    <SideContainer>
      <SectionNav>
        <h3>Account</h3>
        {session ? (
          <p onClick={() => signOut()} className="cursor-pointer">
            <LogOut />
            Logout
          </p>
        ) : (
          <Link href="/accounts/login">
            <p>
              <LogIn />
              Login
            </p>
          </Link>
        )}
        <p>
          <UserPlus />
          Register
        </p>
        <Link href="/create-product">
          <button className="btn btn-outline-success btn-sm mt-2">
            <Plus />
            Add new Product
          </button>
        </Link>
      </SectionNav>
      <SectionNav className="flex-grow-1">
        <h3>Store</h3>
        <ul className="list-unstyled slide_menu d-flex flex-column  justify-content-center">
          <li>
            <a className="slide_menu_item" href="">
              SmartPhones
            </a>
          </li>
          <li>
            <a className="slide_menu_item" href="">
              Computers & Laptops
            </a>
          </li>
          <li>
            <a className="slide_menu_item" href="">
              Accessories
            </a>
          </li>
          <li>
            <a className="slide_menu_item" href="">
              Electronics
            </a>
          </li>
          <li>
            <a className="slide_menu_item" href="">
              Shoes
            </a>
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
  button svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
  }
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
    display: flex;
    align-items: center;
  }
  ul li a::before {
    content: "▶";
    color: #e4611b;
    display: block;
    position: absolute;
  left: 5px;
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
