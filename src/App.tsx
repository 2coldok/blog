import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import styled from "styled-components";

export default function App() {
  const navbarContainerRef = useRef<HTMLDivElement>(null);
  const musicToggle = useSelector((state: RootState) => state.music.toggle);
  
  const [navbarContainerHeight, setNavbarContainerHeight] = useState(60); // navbar height : 60px

  useEffect(() => {
    if (navbarContainerRef.current) {
      setNavbarContainerHeight(navbarContainerRef.current.offsetHeight);
    }
  }, [musicToggle]);

  return (
    <>
      <NavbarContainer ref={navbarContainerRef}>
        <Navbar />
        {musicToggle && <MusicPlayer />}
      </NavbarContainer>

      <MainContentsContainer $margintop={navbarContainerHeight}>
        <Outlet />
      </MainContentsContainer>
    </>
  );
}

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 8000;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

const MainContentsContainer = styled.main<{ $margintop: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1100px; // #root 에서 max-width: 1100px 해두었지만, 안정장치로 설정해둠.
  
  // navbar에 music player가 생길 수도 있기에
  // navbar container 의 전체 높이를 할당받아 상위 마진을 부여한다.
  margin-top: ${(prop) => prop.$margintop}px;
`;
