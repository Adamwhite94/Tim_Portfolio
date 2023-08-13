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
} from "./HeroStyles";

import Self_Portrait from "../../Images/Self_Portrait.jpg";
import { AiOutlineLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <HeroContainer>
      <HeroElements>
        <ImageContainer>
          <HeroImage src={Self_Portrait} />
        </ImageContainer>
        <ContentContainer>
          <HeroTitle>Tim Leighton</HeroTitle>
          <HeroText>Digital Artist</HeroText>
          <IconContainer>
            <a href="https://www.linkedin.com/in/timothy-leighton-212959167?originalSubdomain=au">
              <AiOutlineLinkedin size={30} />
            </a>
          </IconContainer>
          <HeroButton>Download CV</HeroButton>
        </ContentContainer>
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
