import styled from "styled-components";
import { motion } from "framer-motion";
import { secondary, textColor } from "../../utils/colors";

const MotionDiv = motion.div;

export const Container = styled(MotionDiv)`
  background-color: ${secondary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1Div = styled.div`
  margin: 2rem;
  max-width: 1024px;
  display: flex;
  align-items: left;
  h1 {
    font-size: 50px;
    color: ${textColor};
  }
`;
