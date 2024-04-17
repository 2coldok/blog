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
    <>
      <NavbarWrapper ref={navbarRef}>
        <Navbar />
        {musicToggle && <MusicPlayer />}
      </NavbarWrapper>

      <ContentsWrapper $margintop={navbarHeight}>
        <Outlet />
      </ContentsWrapper>
    </>
  );
}

// const AppContainer = styled.div`

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 1100px;

//   width: 100%;
//   height: 100%;
//   overflow-y: auto;
// `;

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */

  width: 100%;
  max-width: 1100px;
  z-index: 8000;

  /* @media (max-width: 900px) {
    width: 100%;
  } */
`;

const ContentsWrapper = styled.div<{ $margintop: number }>`
  display: flex;
  align-items: center;
  justify-contents: center;
  background-color: yellow;
  width: 100%;
  height: 100%;
  /* min-height: 1000px; */
  margin-top: ${(props) => props.$margintop}px;

  /* @media (max-width: 1100px) {
    width: 100%;
  } */
`;
