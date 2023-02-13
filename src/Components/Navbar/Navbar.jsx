import React from "react";

import {
  DropDownContainer,
  DropDownElements,
  DropDownList,
  DropDownListElements,
  DropDownLogo,
  IconContainer,
  SocialMediaIcons,
  Icons,

} from "./NavbarStyles";

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiFillHome,
  AiFillVideoCamera,
} from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ToucanImage from "../../Images/New_Toucan.png";

function Navbar() {
  let navigate = useNavigate();
  return (
    <DropDownContainer>
      <DropDownElements>
        {" "}
        <Icons>
          <IconContainer>
       
            <SocialMediaIcons>
            <DropDownLogo src={ToucanImage} alt="toucan logo img" />
              <DropDownList>
    
                <DropDownListElements onClick={() => navigate("/")}>
                  <AiFillHome /> Home
                </DropDownListElements>
                <DropDownListElements onClick={() => navigate("/projects")}>
                  <BsBriefcaseFill /> Projects
                </DropDownListElements>
                <DropDownListElements onClick={() => navigate("/videos")}>
                  <AiFillVideoCamera /> Videos
                </DropDownListElements>
         
              </DropDownList>
              {/* <AiOutlineFacebook size={40} />
              <AiOutlineLinkedin size={40} />
               */}
            </SocialMediaIcons>
          </IconContainer>
        </Icons>
        {/*how to make buttons not shit */}
      </DropDownElements>
    </DropDownContainer>
  );
}

export default Navbar;
{
  /* <DropDownLogo src = {ToucanImage}/> */
}
