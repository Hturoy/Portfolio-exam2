import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { DotaImg, FashionImg, HolidazeImg } from "../../utils/images";
import { Container, H1Div } from "./styles";

export const Projects = () => {
  return (
    <Container>
      <H1Div>
        <h1>My projects</h1>
      </H1Div>
      <ProjectCard
        project="Holidaze"
        imageSrc={HolidazeImg}
        AltTag="Holidaze website"
        description="In this project i made a holiday booking website, where you can view the different hotels and Activities in Bergen, there is also and admin panel where the administratos can view the admin tools."
        link="https://github.com/Noroff-FEU-Assignments/project-exam-2-Hturoy"
      ></ProjectCard>
      <ProjectCard
        project="Fashion shop"
        AltTag="Fashion shop website"
        imageSrc={FashionImg}
        description="In this project i have made an online clothing, using localstorage as the cart som simple math to figure out the totalcost of the items in the cart, and an Admin panel for adding and deleting articles from the shop"
        link="https://github.com/Hturoy/Semester-project-2-henrik-turoy"
      ></ProjectCard>
      <ProjectCard
        project="Dota"
        AltTag="Dota website"
        imageSrc={DotaImg}
        description="In this small project i have setup and API earlier, i fetch items from the api and display them, you can also click each itemfor more info."
        link="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Hturoy"
      ></ProjectCard>
    </Container>
  );
};
