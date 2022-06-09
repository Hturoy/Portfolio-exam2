import styled from "styled-components";
import { mainColor, secondary, textOndark } from "../../utils/colors";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: ${mainColor};
  h3 {
    color: ${textOndark};

    padding: 0 2rem;
  }
  .open-nav {
    padding: 0 2rem;
  }
  a {
    margin: 0 2rem;
    font-size: 1.5rem;
    color: ${textOndark};
    :hover {
      color: ${secondary};
    }
  }

  @media (max-width: 1024px) {
    nav {
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      z-index: 100;
      background-color: ${mainColor};
      transition: 0.5s;
      transform: translateY(-100vh);
    }
    .responsive {
      transform: none;
    }
    .close-nav {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

export const StyledNav = styled.nav``;

export const StyledButton = styled.span`
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  outline: none;
  stroke: ${textOndark};
  color: ${textOndark};
  visibility: hidden;
  opacity: 0;

  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;
