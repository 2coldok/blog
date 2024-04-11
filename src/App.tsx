import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";


import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const musicToggle = useSelector((state: RootState) => state.music.toggle);

  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(60);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [musicToggle]);

  useEffect(() => {
    console.log('마우스 이벤트 useEffect');
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setNavbarVisible(false);

      } else if (event.deltaY < 0) {
        setNavbarVisible(true);
        
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    }
  }, [])
  
  return (
    <AppContainer>

      <NavbarWrapper ref={navbarRef} $visible={navbarVisible}>
        <Navbar />
        {musicToggle && <MusicPlayer />}
      </NavbarWrapper>

      <ContentsWrapper $margintop={navbarHeight}>
        <Outlet />
      </ContentsWrapper>
  
    </AppContainer>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;


const AppContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const NavbarWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  display: ${(props) => props.$visible ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  width: 100%;

  opacity: 1;
  animation: ${props => props.$visible ? fadeIn : fadeOut} 1s ease forwards;
`

const ContentsWrapper = styled.div<{ $margintop: number}>`
  width: 100%;
  margin-top: ${(props) => props.$margintop}px;
`