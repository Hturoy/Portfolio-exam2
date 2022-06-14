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
          <a href="https://github.com/Hturoy" target="_blank">
            <p className="SocialLink">Github </p>
          </a>
          <a href="https://github.com/Hturoy" target="_blank">
            <FaGithub></FaGithub>
          </a>
        </FlexRow>
        <FlexRow>
          <a
            href="https://www.linkedin.com/in/henrik-tur%C3%B8y-48a76316a/"
            target="_blank"
          >
            <p className="SocialLink">LinkedIn </p>
          </a>
          <a
            href="https://www.linkedin.com/in/henrik-tur%C3%B8y-48a76316a/"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
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
