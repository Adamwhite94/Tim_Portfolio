import React, {useState} from "react";
import {
  Container,
  ProjectElements,
  GridContainer,
  GridElements,
  GridList,
  GridTitle,
  GridText,
  GridListVideo,
  GridVideoSource,
  GridListElement,
  VideoContainer,
} from "../Projects/ProjectsStyles";
import { ProjectImages} from "./ProjectData";
import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";
function Projects() {

  return (
    <Container>
      <ProjectElements>
        <GridContainer>
          <GridElements>
            <GridTitle>My Projects</GridTitle>
            <GridText>
              All of the things I have made, and what I'm passionate about.
            </GridText>
            <GridList>
              {ProjectImages.map((pic) => {
                return (
                  <AnimatePresence>
                    <GridListElement
                      key={pic.id}
                      src={pic.img}
                      
                    />
                  </AnimatePresence>
                );
              })}
            </GridList>
          </GridElements>
        </GridContainer>
      </ProjectElements>
      <Outlet />
    </Container>
  );
}

export default Projects;
