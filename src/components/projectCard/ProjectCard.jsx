import { Container, ImageFrame, TextFrame, AltTag } from "./styles";

export const ProjectCard = (props) => {
  return (
    <Container>
      <ImageFrame>
        <img src={props.imageSrc} alt={props.AltTag} />
      </ImageFrame>
      <TextFrame>
        <h1>{props.project}</h1>
        <button>View this project</button>

        <p>{props.description}</p>
      </TextFrame>
    </Container>
  );
};
