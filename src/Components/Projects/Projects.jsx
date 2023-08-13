import React from "react";
import {
  Container,
  ProjectElements,
  GridContainer,
  GridElements,
  GridList,
  GridTitle,
  GridText,
  GridListElement,

} from "../Projects/ProjectsStyles";
import { ProjectImages} from "./ProjectData";

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
              
                    <GridListElement
                      key={pic.id}
                      src={pic.img}
                      
                    />
               
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
