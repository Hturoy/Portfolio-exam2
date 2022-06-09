import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { DotaImg, FashionImg, HolidazeImg } from "../../utils/images";
import { Container } from "./styles";

export const Projects = () => {
  return (
    <Container>
      <ProjectCard
        project="Holidaze"
        imageSrc={HolidazeImg}
        description="In this project i made a holiday booking website, where you can view the different hotels and Activities in Bergen, there is also and admin panel where the administratos can view the admin tools."
      ></ProjectCard>
      <ProjectCard
        project="Fashion shop"
        imageSrc={FashionImg}
        description="In this project i have made an online clothing, using localstorage as the cart som simple math to figure out the totalcost of the items in the cart, and an Admin panel for adding and deleting articles from the shop"
      ></ProjectCard>
      <ProjectCard
        project="Dota"
        imageSrc={DotaImg}
        description="In this small project i have setup and API earlier, i fetch items from the api and display them, you can also click each itemfor more info."
      ></ProjectCard>
    </Container>
  );
};
