import styled from "styled-components";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }

export const Container = styled.div`

`;
export const ProjectElements = styled.div`

  `;

export const GridContainer = styled.div`

padding-top: 10vh;
`;
export const GridElements = styled.div`
`;
export const GridList = styled.div`
display:grid;
grid-template-columns: repeat(4,1rem);
grid-column-gap: 17rem;
grid-row-gap: 3rem;
padding-right: 14rem;
margin-top: 4rem;
justify-content: center;
align-items: center;
 @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  grid-template-columns:repeat(2,1rem);
  grid-column-gap: 9rem;
grid-row-gap: 2rem;
padding-right: 8rem;
 }
 @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  grid-template-columns:repeat(2,1rem);
  grid-column-gap: 11rem;
grid-row-gap: 2rem;
padding-right: 9.5rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  grid-template-columns:repeat(3,1rem);
  grid-column-gap: 14rem;
grid-row-gap: 2rem;
padding-right: 13rem;
 }
`;
export const GridListElement = styled.img`

width: 16vw;
height: 36vh;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
width: 40vw;
height: 30vh;
 }
 @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 40vw;
height: 30vh;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  width: 30vw;
height: 30vh;
 }
`;


export const GridTitle = styled.h1`
text-align: center;
font-size: 5rem;
height: 1rem;

`;

export const GridText = styled.h3`
padding-top: 4rem;
text-align: center;

color: #ff8c00;
`;

