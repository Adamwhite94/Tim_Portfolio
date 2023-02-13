import React, {useState} from "react";

import {
  VideoContainer,
  GridTitle,
  GridText,
  GridElements,

  VideoElements,
  GridContainer,
  GridListVideo,
GridButtonContainer,
  GridButton,
  GridVideoContainer
} from "./VideoStyles";
import { ProjectVideos } from "./VideoData";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
function Videos() {

  let [index, setIndex] = useState(0);
 
  let firstVideo = ProjectVideos[index];

  const forwardClickHandler = (e)=>{
    setIndex(index => index+1);
    console.log(index);
  }
  const backClickHandler = (e)=>{
    setIndex(index => index-1);
    console.log(index);
  }

  return (
    
    <VideoContainer>
      <VideoElements>
        <GridContainer>
      <GridElements>
      
        <GridTitle>Videos</GridTitle>
        <GridText>Creativity, through the means of expression</GridText>

          
              <GridVideoContainer key={firstVideo?.id} >
              <GridListVideo  src={firstVideo?.video} type="video/mp4" autoPlay playsInline muted controls ></GridListVideo>
              <GridButtonContainer>
              <GridButton onClick={(e)=>backClickHandler(e)}>Previous Video</GridButton>
              <GridButton onClick={(e)=>forwardClickHandler(e)}>Next Video</GridButton>
              </GridButtonContainer>
              
         
              </GridVideoContainer>
     
        
        
       
      </GridElements>
      </GridContainer>
      </VideoElements>
    </VideoContainer>
  );
}

export default Videos;
