
import { FaCat } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
import { IoMusicalNotes } from "react-icons/io5";

import styled from "styled-components";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";

export default function Navbar() {
  

  return (
    <NavbarWrapper>
      
      <Left>
        <MenuDrawer />
        <HomeButton>
          <FaCat />
          <span>Chan's Blog</span>
        </HomeButton>
      </Left>

      <Right>
        <ToolBoxButton><ImBrightnessContrast /></ToolBoxButton>
        <ToolBoxButton><IoMusicalNotes /></ToolBoxButton>
        <ToolBoxButton><BsSearch /></ToolBoxButton>
      </Right>

      
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  height: 60px;
  background-color: grey;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: black;
`

const Right = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`

const ToolBoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 0.2em;


  & > svg {
    font-size: 2em;
    margin-left: 0.2em;
    margin-right: 0.4em;
  }

  background-color: pink;
`
const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  & > span {
    font-size: 2em;
  }

  & > svg {
    font-size: 2em;
    margin-left: 0.2em;
    margin-right: 0.4em;
  }

  background-color: pink;
`


// const SearchInput = styled.input`
//   width: 50%;
  
//   transition: width 0.3s ease-in-out;
//   &:focus {
//     width: 100%;
//   }
// `

