import React from "react";

import styled from "styled-components/macro";
import NavItem from "./NavItem";

const NavWrapper = styled.section`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
const Navbar = () => {
  return (
    <NavWrapper>
      <NavItem name="Skills" link="skills"></NavItem>
      <NavItem name="Projects" link="projects"></NavItem>
      <NavItem name="Contact" link="contact"></NavItem>
    </NavWrapper>
  );
};

export default Navbar;
