import styled from "styled-components";
import { motion } from "framer-motion";
import { secondary } from "../../utils/colors";

const MotionDiv = motion.div;

export const Container = styled.div`
  background-color: ${secondary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
