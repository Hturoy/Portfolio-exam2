import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { StyledButton } from "./styles";

export const Navbar = () => {
  const navigationRef = useRef();
  const displayNav = () => {
    navigationRef.current.classList.toggle("responsive");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navigationRef}>
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="about">About</Link>
        <StyledButton className="close-nav" onClick={displayNav}>
          <FaTimes />
        </StyledButton>
      </nav>
      <StyledButton onClick={displayNav}>
        <FaBars />
      </StyledButton>
    </header>
  );
};
