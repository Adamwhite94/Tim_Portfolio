import styled from "styled-components";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }

export const GridElements = styled.div``;
export const VideoElements = styled.div``;

export const GridListElement = styled.img`
  width: 13vw;
  height: 25vh;
`;

export const GridTitle = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

export const GridText = styled.h3`
  padding-top: 0.1rem;
  text-align: center;

  color: #ff8c00;
`;

export const VideoContainer = styled.div``;

export const GridListVideo = styled.video`
  width: 30rem;
  height: 30rem;
  object-fit: contain;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 25rem;
    height: 25rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    width: 25rem;
    height: 25rem;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    width: 25rem;
    height: 25rem;
 }
`;

export const GridContainer = styled.div`
  padding-top: 5vh;
`;
export const GridButton = styled.button`
  width: 15vw;
  height: 8vh;
  background: none;
  margin-top: 4vh;
  font-size: 1.3rem;
  border-color: white;
  margin: 2rem;
  cursor: pointer;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 25vw;
    height: 8vh;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    width: 25vw;
    height: 8vh;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    width: 25vw;
    height: 8vh;
 }
`;

export const GridVideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding-top: 3rem;
  flex-direction: column;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    padding-top: 11vh;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    padding-top: 11vh;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
     padding-top: 11vh;
 }
`;
export const GridButtonContainer = styled.div``;
