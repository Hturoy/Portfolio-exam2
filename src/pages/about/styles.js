import styled from "styled-components";
import { secondary } from "../../utils/colors";

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  background-color: ${secondary};
`;

export const Wrapper = styled.div`
  padding: 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  article {
    max-width: 300px;
  }
`;
