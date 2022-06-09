import { createGlobalStyle } from "styled-components";
import { lightMain, mainColor, secondary, textOndark } from "./utils/colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    box-sizing: border-box;
      }
      button {
    border: 0;
    background-color: ${mainColor};
    padding: 1rem;
    border-radius: 50px;
    font-size: 1rem;
    margin: 2rem 0 2rem 0;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    color: ${textOndark};
    transition: 0.5s;
    :hover{
        color: ${secondary};
        background-color: ${lightMain};
        transition: 0.5s;
        transform: scale(1.04);
        cursor: pointer;
    }
}
`;

export default GlobalStyle;
