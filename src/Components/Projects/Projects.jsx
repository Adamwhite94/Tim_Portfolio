import React from "react";
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
import { ProjectImages, ProjectVideos } from "./ProjectData";

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
                  <GridListElement key={pic.id} src={pic.img} alt={pic.alt} />
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
