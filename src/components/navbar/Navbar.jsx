import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { StyledButton, StyledHeader } from "./styles";

export const Navbar = () => {
  const navigationRef = useRef();
  const displayNav = () => {
    navigationRef.current.classList.toggle("responsive");
    window.scrollTo(0, 0);
  };

  return (
    <StyledHeader>
      <h3>Henrik Turøy</h3>
      <nav ref={navigationRef}>
        <Link to="/" onClick={displayNav}>
          Home
        </Link>
        <Link to="projects" onClick={displayNav}>
          Projects
        </Link>
        <Link to="about" onClick={displayNav}>
          About
        </Link>
        <StyledButton className="close-nav" onClick={displayNav}>
          <FaTimes />
        </StyledButton>
      </nav>
      <StyledButton className="open-nav" onClick={displayNav}>
        <FaBars />
      </StyledButton>
    </StyledHeader>
  );
};
