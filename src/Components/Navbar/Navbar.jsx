import React from "react";

import {
  DropDownContainer,
  DropDownElements,
  DropDownList,
  DropDownListElements,
  DropDownLogo,
  SocialMediaIcons,
} from "./NavbarStyles";

import {
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
        <DropDownLogo src={ToucanImage} alt="toucan logo img" />
        <SocialMediaIcons>
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
        </SocialMediaIcons>
      </DropDownElements>
    </DropDownContainer>
  );
}

export default Navbar;

