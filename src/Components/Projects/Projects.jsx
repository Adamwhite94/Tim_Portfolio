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
  GridImageTitles,
  TitleDivider,
  ImageTitleWrapper
} from "../Projects/ProjectsStyles";
import { ProjectImages } from "./ProjectData";
import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";
function Projects() {
  return (
    <Container>
      <ProjectElements>
        <GridContainer>
          <GridElements>
            <AnimatePresence>
              <GridTitle
                key="projectmodal"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: -500, opacity: 0 },
                }}
              >
                MY PROJECTS
              </GridTitle>
            </AnimatePresence>

            <GridText>
              All of the things I have made, and what I'm passionate about.
            </GridText>
   
            <GridList>
              {ProjectImages.map((pic) => {
                return (
                  <>
                  <ImageTitleWrapper>
                  <GridImageTitles >{pic.title}</GridImageTitles>
                  <TitleDivider></TitleDivider>
                  </ImageTitleWrapper>
                  <GridListElement key={pic.id} src={pic.img} />
                  </> 
                )
              
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
