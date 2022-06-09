import React from "react";
import { Link } from "react-router-dom";
import { portrait } from "../../utils/images";
import { Container, TopSection, BottomSection, ImageFrame } from "./styles";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <Container>
      <TopSection>
        <div>
          <motion.h1
            initial={{ x: -500 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 90 }}
            animate={{ x: 0 }}
          >
            Henrik Turøy
          </motion.h1>

          <motion.h2
            initial={{ x: 2000 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 90 }}
            animate={{ x: 0 }}
          >
            Frontend Developer
          </motion.h2>
        </div>
        <div>
          <Link to="projects">
            <motion.button
              initial={{ scale: 0 }}
              transition={{ duration: 0.1 }}
              animate={{ scale: 1 }}
            >
              My projects
            </motion.button>
          </Link>
        </div>
      </TopSection>
      <BottomSection>
        <h3>This is me</h3>
        <ImageFrame>
          <motion.img
            src={portrait}
            alt="Henrik Turøy"
            initial={{ x: -500 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 90 }}
            animate={{ x: 0 }}
          />
        </ImageFrame>
        <article>
          <p>
            My name is Henrik Turøy, im a 24 year old Frontend developer
            currently located in Bergen, Norway.
          </p>
          <Link to="about">
            <button>More about me</button>
          </Link>
        </article>
      </BottomSection>
    </Container>
  );
};
