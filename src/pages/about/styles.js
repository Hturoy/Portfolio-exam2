import styled from "styled-components";
import { secondary } from "../../utils/colors";

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0 2rem;
  background-color: ${secondary};

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  article {
    margin: 2rem 0;
    max-width: 300px;
  }
`;

export const TechWrapper = styled.div`
  padding: 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0 0 1rem 0;
    li {
      padding: 0.2rem 0;
    }
    div {
      margin: 1rem 0.5rem;
    }
  }

  .Education {
    flex-direction: column;
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;
export const LogoFrame = styled.div`
  height: 80px;
  width: 80px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
