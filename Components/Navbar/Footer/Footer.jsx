import React from "react";
import styled from "styled-components";
import NavLogo from "../NavLogo";
import { Globe } from "@styled-icons/feather/Globe";
import { Github } from "@styled-icons/feather/Github";
import { Facebook } from "@styled-icons/feather/Facebook";
import { Mail } from "@styled-icons/feather/Mail";

const Footer = () => {
  return (
    <FooterContainer className="mt-4 d-flex justify-content-center flex-column flex-md-row gap-4 justify-content-md-around">
      <FooterInfo>
        <NavLogo />
        <small className="fw-bolder">Got a question? 24/7</small>
        <p className="fw-bolder text-success number">+222 20 22 35 11</p>
        <div className="d-flex gap-4 align-items-center">
          <Facebook />
          <Github />
          <Globe />
          <Mail />
        </div>
      </FooterInfo>
      <FastLinks>
        <small className="fw-bolder my-3 d-inline-block">Find it Fast</small>
        <p>Computers & Laptops</p>
        <p>Accessories</p>
        <p>TV and audios</p>
        <p>Fournitures</p>
        <p>Electronics</p>
      </FastLinks>
      <CostumerCare>
        <small className="fw-bolder my-3 d-inline-block">Customer Care</small>
        <p>My account</p>
        <p>Order tracking</p>
        <p>Watched Items</p>
      </CostumerCare>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #f9f9f9;
  padding: 2rem;
`;

const FooterInfo = styled.div`
  .d-flex > svg {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
const FastLinks = styled.div`
  p {
    font-size: clamp(0.9rem, 0.25vw, 1.5rem);
    line-height: 0.8;
    font-weight: 500;
  }
`;
const CostumerCare = styled.div`
  p {
    font-size: clamp(0.9rem, 0.25vw, 1.5rem);
    line-height: 0.8;
    font-weight: 500;
  }
`;
