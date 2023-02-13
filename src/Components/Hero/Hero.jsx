import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroElements,
  HeroImage,
  ContentContainer,
  SubInfoContainer,
  HeroText,
  HeroButton,
  HeroList,
  HeroListElement,
  SubAchievementsContainer,
  ImageContainer,
  IconContainer

} from "./HeroStyles";

import {TechIcons} from "../Hero/HeroData.js";
import Self_Portrait from '../../Images/Self_Portrait.jpg'
import { AiOutlineLinkedin, AiOutlineFacebook} from "react-icons/ai";


function Hero() {
  return (
    <HeroContainer>
      <HeroElements>
        <ImageContainer>
      <HeroImage src={Self_Portrait}/>
  
      </ImageContainer>
        <ContentContainer>
         
          <HeroTitle>Tim Leighton</HeroTitle>
          <HeroText>Digital Artist</HeroText>
          <IconContainer>
      <a href="https://www.facebook.com/profile.php?id=100009230818243"><AiOutlineFacebook size={30}/></a> <a href="https://www.linkedin.com/in/timothy-leighton-212959167?originalSubdomain=au"><AiOutlineLinkedin size={30}/></a>
      </IconContainer>
          <HeroButton>Download CV</HeroButton>
          
          </ContentContainer>
          {/* <SubInfoContainer>
          <HeroTitle>Tech Stack</HeroTitle>
          <HeroText>The tools that I use</HeroText>
          <HeroList>
          {TechIcons.map((icon)=>{
            return(
              <HeroListElement key={icon.id} src={icon.img} alt ={icon.alt}/>
            )
          })}
          </HeroList>
          </SubInfoContainer>
          <SubAchievementsContainer>
          <HeroTitle>Achievements</HeroTitle>
          <HeroText>What have I done</HeroText>
          </SubAchievementsContainer> */}
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
