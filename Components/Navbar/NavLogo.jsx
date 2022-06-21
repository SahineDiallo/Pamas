import React from "react";
import styled from "styled-components";

const NavLogo = () => {
  return (
    <Logo>
      <svg
        enableBackground="new 0 0 1600 477"
        viewBox="0 0 1600 477"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipRule="evenodd" fillRule="evenodd">
          <path d="m345.1 0h-243.5c-56.1 0-101.6 45.5-101.6 101.6v243.6c0 56.1 45.5 101.6 101.6 101.6h243.6c56.1 0 101.6-45.5 101.6-101.6v-243.6c-.1-56.1-45.6-101.6-101.7-101.6zm-65.8 120.2c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2s-20.2-9-20.2-20.2 9.1-20.2 20.2-20.2zm0 56.9c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2s-20.2-9-20.2-20.2 9.1-20.2 20.2-20.2zm-56.8-56.9c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2s-20.2-9-20.2-20.2 9.1-20.2 20.2-20.2zm0 56.9c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2s-20.2-9-20.2-20.2 9.1-20.2 20.2-20.2zm-56.8-56.9c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2-11.1 0-20.2-9-20.2-20.2s9.1-20.2 20.2-20.2zm0 56.9c11.1 0 20.2 9 20.2 20.2 0 11.1-9 20.2-20.2 20.2-11.1 0-20.2-9-20.2-20.2s9.1-20.2 20.2-20.2zm-54.6 212.9c-21.3 0-38.5-17.3-38.5-38.5 0-21.3 17.3-38.6 38.5-38.6 21.3 0 38.6 17.3 38.6 38.6s-17.3 38.5-38.6 38.5zm222.7 1.7c-21.3 0-38.5-17.3-38.5-38.5 0-21.3 17.3-38.6 38.5-38.6 21.3 0 38.6 17.3 38.6 38.6s-17.3 38.5-38.6 38.5zm67.8-313.5-39.8 148.4c-10.6 39.6-44.2 64.5-85.2 64.5h-26.3c-8.7 0-21.3-4.7-26.5-9.6-.9-.8-2.2-.8-3.1 0-5.2 4.9-17.8 9.6-26.5 9.6h-28.9c-39.7 0-69.8-22.6-81.9-60.5l-33.9-106.2c-.7-2.1-.3-4.4 1-6.2s3.3-2.8 5.6-2.8h6.5c15.6.1 29.3 10.1 34 25l24.9 78.2c6.7 21.2 28.3 35.4 50.5 35.4h9.7c10 0 17-5.1 21.2-9.7 2.2-2.4 5.3-3.8 8.5-3.8h21.7c3.1 0 6.1 1.2 8.1 3.5 4.1 4.5 11.4 10 21.5 10h9.2c22.9 0 45.2-15.5 51.2-37.6l32.3-120.2c4.2-15.6 18.4-26.6 34.6-26.6h5.7c.5 0 1.1.1 1.6.3 3.5 1.5 5.1 5.1 4.3 8.3z"></path>
          <path d="m333.8 339.4c-7.6 0-13.8 6.2-13.8 13.8s6.2 13.8 13.8 13.8 13.8-6.2 13.8-13.8c.1-7.6-6.1-13.8-13.8-13.8z"></path>
          <path d="m111.1 337.6c-7.6 0-13.8 6.2-13.8 13.8s6.2 13.8 13.8 13.8 13.8-6.2 13.8-13.8-6.2-13.8-13.8-13.8z"></path>
        </g>
      </svg>
      <LogoName>
        <h1>Pamas</h1>
        <small>market</small>
      </LogoName>
    </Logo>
  );
};

export default NavLogo;

const Logo = styled.div`
  font-family: "Pacifico";
  display: flex;
  align-items: flex-start;
  svg {
    height: 50px;
    margin-right: -120px;
  }
`;
const LogoName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
  h1 {
    margin: 0;
    line-height: 1;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }
  small {
    line-height: 1;
  }
`;
