import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroElements,
  HeroImage,
  ContentContainer,
  HeroText,
  HeroButton,
  ImageContainer,
  IconContainer,
  HeroTitleContainer
} from "./HeroStyles";

import Self_Portrait from "../../Images/Self_Portrait.jpg";
import { AiOutlineLinkedin } from "react-icons/ai";
import Resume from '../../Resume/Timothy_Leighton_CV.pdf'
import { HeroParticles } from "./HeroParticles";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

function Hero() {
  const [title] = useState("Tim Leighton");

  const words = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }
  }
  return (
    <HeroContainer>
      <HeroParticles />
      <HeroElements>
        <Tilt>
        <ImageContainer>
          <HeroImage src={Self_Portrait} />
        </ImageContainer>
        </Tilt>
        <ContentContainer>
          <HeroTitleContainer 
          variants={container}
            initial="hidden"
            animate="visible">
          {words.map((word, index) => (
          <HeroTitle variants={child} key={index}>
             {word === " " ? "\u00A0" : word}
          </HeroTitle>
            ))} 
          </HeroTitleContainer>
        
          <HeroText>Digital Artist</HeroText>
          <IconContainer>
            <a href="https://www.linkedin.com/in/timothy-leighton-212959167?originalSubdomain=au">
              <AiOutlineLinkedin size={30} />
            </a>
          </IconContainer>
          <a href={Resume}><HeroButton>Download CV</HeroButton></a>
        </ContentContainer>
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
