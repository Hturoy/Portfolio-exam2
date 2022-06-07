import styled from "styled-components";
import { motion } from "framer-motion";
import { secondary } from "../../utils/colors";

const MotionDiv = motion.div;

export const Container = styled.div`
  background-color: ${secondary};
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
`;
