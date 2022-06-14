import styled from "styled-components";
import { mainColor, secondary, textColor } from "../../utils/colors";

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

  a {
    color: ${textColor};
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;
