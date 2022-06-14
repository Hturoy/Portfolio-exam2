import React from "react";
import {
  CssLogo,
  HtmlLogo,
  JsLogo,
  MotionLogo,
  portrait,
  ReactLogo,
  StyledComponentsLogo,
} from "../../utils/images";
import { ImageFrame } from "../home/styles";
import { LogoFrame, TechWrapper } from "./styles";
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
        <TechWrapper>
          <h2>Technologies</h2>
          <ul>
            <LogoFrame>
              <img src={HtmlLogo} alt="" />
            </LogoFrame>
            <LogoFrame>
              <img src={CssLogo} alt="" />
            </LogoFrame>
            <LogoFrame>
              <img src={ReactLogo} alt="" />
            </LogoFrame>
            <LogoFrame>
              <img src={JsLogo} alt="" />
            </LogoFrame>
            <LogoFrame>
              <img src={StyledComponentsLogo} alt="" />
            </LogoFrame>
            <LogoFrame>
              <img src={MotionLogo} alt="" />
            </LogoFrame>
          </ul>
          <h2>Education</h2>
          <ul className="Education">
            <li>
              Marketing and Salesmanagement - Høyskolen Kristiania(2018-2020)
            </li>
            <li>Frontend Development - Noroff(2020-2022)</li>
          </ul>

          <h2>Work</h2>
          <ul className="Education">
            <li>Sales - Power Norge AS (2016-Today)</li>
            <li>Sales - Falck Alarm (2019-2020)</li>
          </ul>
        </TechWrapper>
      </ContainerTop>
    </>
  );
};
