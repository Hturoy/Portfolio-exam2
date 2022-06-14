import styled from "styled-components";
import { lightMain, mainColor, secondary } from "../../utils/colors";

export const StyledFooter = styled.footer`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${secondary};
  border-top: solid 2px ${mainColor};
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  padding: 2rem;
  font-size: 1.1rem;

  a {
    color: ${mainColor};
    transition: 0.3s;
    :hover {
      transition: 0.3s;

      color: ${lightMain};
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const FlexRow = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${mainColor};

  p {
    padding: 0 0.5rem 0 0;
  }

  .SocialLink {
    transition: 0.3s;
    :hover {
      transition: 0.3s;

      color: ${lightMain};
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
