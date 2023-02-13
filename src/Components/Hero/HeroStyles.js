import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";


export const HeroContainer = styled.div`
  background-repeat: no-repeat;
`;
export const HeroTitle = styled.h1`
  font-size: 5rem;
  text-align: center;

  cursor: default;
  text-transform: uppercase;
`;
export const HeroText = styled.h3`
  text-align: center;
  font-size: 3rem;
  margin-top: 1vh;
  color: #ff8c00;
  cursor: default;
`;

export const HeroElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh;
`;



export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  float:right;


`;
export const SubInfoContainer = styled.div`

border-top: 1px solid white;
border-bottom: 1px solid white;
padding: 10rem;
`;
export const HeroImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%; 
  padding-right: 3rem;
 
`;
export const HeroButton = styled.button`
  width: 15vw;
  height: 8vh;
  background: none;
  margin-top: 8vh;
  font-size: 1.3rem;
  border-color: white;

  cursor: pointer;
`;
export const HeroList = styled.div`
display:grid;
grid-template-columns: repeat(4, 1rem);
justify-content: center;
grid-column-gap: 14rem;
grid-row-gap: 2rem;
margin-top: 4rem;
padding-right: 10rem;
`;
export const HeroListElement = styled.img`
width: 10rem;
height: 9rem;
background-color: white;

padding:1rem;
gap: 2rem;
`;

export const SubAchievementsContainer = styled.div`
margin-top: 5rem;
`;

export const ImageContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
cursor:pointer;
padding-top: 1rem;
`;

