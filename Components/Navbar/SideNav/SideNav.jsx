import React from "react";
import styled from "styled-components";
// import { LinkedIn } from "@styled-icons/feather/Linkedin";
// import { GitHub } from "@styled-icons/feather/Github";

const SideNav = () => {
  return (
    <SideContainer>
      <SectionNav>
        <h3>Account</h3>
        <p>Login</p>
        <p>Register</p>
      </SectionNav>
      <SectionNav className="flex-grow-1">
        <h3>Store</h3>
      </SectionNav>
      <SectionNav>
        <h3>Socials</h3>
        <SocialLinks>
          {/* <LinkedIn />
          <GitHub /> */}
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
  }
  p {
    margin-bottom: 7px !important;
  }
`;
const SideContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SocialLinks = styled.div``;
