import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { projectPlaceHolder } from "../../utils/images";
import { Container } from "./styles";

export const Projects = () => {
  return (
    <Container>
      <ProjectCard
        project="test"
        imageSrc={projectPlaceHolder}
        description="this is filler text for late do not conserne yourself with whats inside this p tag, plase stop looking, i just need enough text to make the styling work, and im not really sure how much i need so im just gonna stop typing now"
      ></ProjectCard>
      <ProjectCard
        project="test"
        imageSrc={projectPlaceHolder}
        description="this is filler text for late do not conserne yourself with whats inside this p tag, plase stop looking, i just need enough text to make the styling work, and im not really sure how much i need so im just gonna stop typing now"
      ></ProjectCard>
      <ProjectCard
        project="test"
        imageSrc={projectPlaceHolder}
        description="this is filler text for late do not conserne yourself with whats inside this p tag, plase stop looking, i just need enough text to make the styling work, and im not really sure how much i need so im just gonna stop typing now"
      ></ProjectCard>
    </Container>
  );
};
