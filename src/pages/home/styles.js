import styled from "styled-components";
import { mainColor, secondary, textColor } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: ${secondary};
  @media (min-width: 1240px) {
    padding: 0 7rem;
  }
`;

export const TopSection = styled.div`
  max-width: 1024px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  justify-content: space-evenly;

  h1 {
    color: ${textColor};
    font-size: 3rem;
    text-shadow: 9px 8px 15px rgba(0, 0, 0, 0.6);
    @media (max-width: 380px) {
      font-size: 2rem;
    }
  }
  h2 {
    color: ${mainColor};
    font-size: 1.8rem;
    text-shadow: 9px 8px 15px rgba(0, 0, 0, 0.6);
    @media (max-width: 380px) {
      font-size: 1.4rem;
    }
  }
`;

export const BottomSection = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  background-color: ${secondary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  article {
    margin: 2rem 0 2rem 0;
    max-width: 300px;
  }
  h3 {
    font-size: 1.8rem;
  }
`;

export const ImageFrame = styled.div`
  height: 280px;
  width: 280px;
  border-radius: 100%;
  border: solid 5px ${mainColor};

  img {
    object-fit: cover;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    filter: grayscale(200%);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
