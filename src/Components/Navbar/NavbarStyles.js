import styled from "styled-components";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }

export const DropDownContainer = styled.div``;
export const DropDownElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DropDownList = styled.div`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  
`;
export const DropDownListElements = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  &:hover {
    color: #ff8c00;
  }
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 1rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 1rem;
}
`;
export const DropDownLogo = styled.img`
  height: 7rem;
  width: 14rem;
  transform: scaleX(-1);
  padding-top: 2rem;
  margin-left: 2rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  height: 4rem;
  width: 10rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  height: 4rem;
  width: 10rem;
}
`;

export const SocialMediaIcons = styled.div`
  cursor: pointer;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  margin-right: 1rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  margin-right: 1rem;
}
`;
