import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <h3>Socials</h3>
        <p>Github</p>
        <p>LinkedIn</p>
      </FooterContainer>
      <FooterContainer>
        <h3>Contact</h3>
        <p>Henrikturoy@gmail.com</p>
        <p>+47 950 47 996</p>
      </FooterContainer>

      <FooterContainer>
        <h3>Navigation</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>About</Link>
      </FooterContainer>
    </StyledFooter>
  );
};
