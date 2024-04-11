import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";


import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const musicToggle = useSelector((state: RootState) => state.music.toggle);

  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(60);
  

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [musicToggle]);
  
  return (
    <AppContainer>

      <NavbarWrapper ref={navbarRef}>
        <Navbar />
        {musicToggle && <MusicPlayer />}
      </NavbarWrapper>

      <ContentsWrapper $margintop={navbarHeight}>
        <Outlet />
      </ContentsWrapper>
  
    </AppContainer>
  )
}

const AppContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ContentsWrapper = styled.div<{ $margintop: number}>`
  width: 100%;
  margin-top: ${(props) => props.$margintop}px;
`