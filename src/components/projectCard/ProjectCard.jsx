import { Container, ImageFrame, TextFrame } from "./styles";

export const ProjectCard = (props) => {
  return (
    <Container>
      <ImageFrame>
        <img src={props.imageSrc} alt={props.AltTag} />
      </ImageFrame>
      <TextFrame>
        <h1>{props.project}</h1>
        <a target="blank" href={props.link}>
          <button>View this project</button>
        </a>
        <p>{props.description}</p>
      </TextFrame>
    </Container>
  );
};
