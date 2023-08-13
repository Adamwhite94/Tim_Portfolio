import styled from "styled-components";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }



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
height: 75vh;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  flex-direction: column;
  height: 100vh;
  margin-left: 0.5rem;
  margin-top: 2rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  flex-direction: column;
  height: 100vh;
  margin-left: 0.5rem;
  margin-top: 2rem;
}
`;



export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
 


`;

export const HeroImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%; 
  padding-right: 3rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 15rem;
  height: 15rem;
  padding-right: 0;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 15rem;
  height: 15rem;
  padding-right: 0;
}
 @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  width: 23rem;
  height: 23rem;
  padding-right: 0;
 }
`;
export const HeroButton = styled.button`
  width: 15vw;
  height: 8vh;
  background: none;
  margin-top: 8vh;
  font-size: 1.3rem;
  border-color: white;

  cursor: pointer;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 20rem;
    margin-right: 0.5rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 20rem;
    margin-right: 0.5rem;
}
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

