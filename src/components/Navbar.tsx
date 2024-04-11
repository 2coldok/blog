
import { FaCat } from "react-icons/fa";
// import { TbSearch } from "react-icons/tb";
// import React from "react";
// import { ImBrightnessContrast } from "react-icons/im";
// import { IoMusicalNotes } from "react-icons/io5";

import styled from "styled-components";
// import { useState } from "react";

import ToolBox from "./ToolBox";
import Menu from "./Menu";


export default function Navbar() {
  

  return (
    <NavbarWrapper>
      
      <Left>
        <Menu />
        <HomeButton>
          <FaCat />
          <span>Chan's Blog</span>
        </HomeButton>
      </Left>

      <Right>
        <ToolBox />
      </Right>

    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 60px;
  
  background-color: #304031;
  
  padding-left: 1em;
  padding-right: 1em;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  /* background-color: black; */
`

const Right = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 0;
  padding: 0;
`
const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  & > span {
    font-size: 2em;
    color: #ef7d25;
  }

  & > svg {
    font-size: 2.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
    color: yellow;
  }
  background-color:transparent;
  /* background-color: pink; */
`
