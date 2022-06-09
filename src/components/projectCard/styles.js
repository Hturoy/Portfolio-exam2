import styled from "styled-components";
import { textColor } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 2rem 0;
  border-radius: 2rem;
  padding: 2rem 2rem;
  max-height: 400px;
  @media (max-width: 1024px) {
    flex-direction: column;
    max-height: fit-content;
    align-items: center;
    width: 90%;
  }
  @media (max-width: 500px) {
    padding: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const ImageFrame = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 1rem;
  img {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media (max-width: 500px) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    padding: 0;
    height: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TextFrame = styled.div`
  display: flex;
  padding: 1rem;
  color: ${textColor};
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;

  p {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
