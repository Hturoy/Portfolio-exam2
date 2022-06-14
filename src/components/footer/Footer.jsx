import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, StyledFooter, FlexRow } from "./styles";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <h3>Socials</h3>
        <FlexRow>
          <p className="SocialLink">Github </p>
          <FaGithub></FaGithub>
        </FlexRow>
        <FlexRow>
          <p className="SocialLink">LinkedIn </p>
          <FaLinkedin></FaLinkedin>
        </FlexRow>
      </FooterContainer>
      <FooterContainer>
        <h3>Contact</h3>
        <FlexRow>
          <p>Henrikturoy@gmail.com </p>
          <FaMailBulk></FaMailBulk>
        </FlexRow>
        <FlexRow>
          <p>+47 950 47 996 </p>
          <FaPhoneAlt></FaPhoneAlt>
        </FlexRow>
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
