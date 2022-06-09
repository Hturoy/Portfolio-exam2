import React from "react";
import { portrait } from "../../utils/images";
import { ImageFrame } from "../home/styles";
import { ContainerTop, Wrapper } from "./styles";

export const About = () => {
  return (
    <>
      <ContainerTop>
        <Wrapper>
          <h1>Hello!</h1>
          <ImageFrame>
            <img src={portrait} alt="henrik turøy" />
          </ImageFrame>
          <article>
            <p>
              My name is Henrik Turøy, im 24 year old newly educated Frontend
              developer currently looking for work.
            </p>
          </article>
        </Wrapper>
        <Wrapper>
          <h2>Technologies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>STYLED COMPONENTS</li>
            <li>FRAMER-MOTION</li>
            <li>And more</li>
          </ul>
        </Wrapper>
      </ContainerTop>
    </>
  );
};
