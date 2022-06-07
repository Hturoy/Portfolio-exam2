import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 2rem 0;
  padding: 2rem 2rem;
  max-height: 400px;
  @media (max-width: 1024px) {
    flex-direction: column;
    max-height: fit-content;
    align-items: center;
    width: 90%;
  }
`;

export const ImageFrame = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 1rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TextFrame = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
