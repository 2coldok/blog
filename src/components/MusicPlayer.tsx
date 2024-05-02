// import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { musicOff } from '../redux/slice/musicSlice';
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { MusicSkeletonLoader } from '../util/skeleton/MusicSkeletonLoader';
import { useThemeChange } from '../hook/ThemeHook';

export default function MusicPlayer() {
  const youtubeUrl = useSelector((state: RootState) => state.music.url);
  const [youtubeEmbedURL, setYoutubeEmbedURL] = useState(`https://www.youtube.com/embed/${getVideoId(youtubeUrl)}`);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();
  const { themeName } = useThemeChange();
  useEffect(() => {
    setYoutubeEmbedURL(`https://www.youtube.com/embed/${getVideoId(youtubeUrl)}`);
    setLoading(true);
  }, [youtubeUrl])

  const handleClick = () => {
    dispatch(musicOff());
  }
  
  return (
    <PlayerWrapper>
      {loading && <MusicSkeletonLoader />}
      
      <Iframe
        id="player"
        title="youtube player"
        // type="text/html"
        src={youtubeEmbedURL}
        onLoad={() => setLoading(false)} 
      ></Iframe>
      <Button onClick={handleClick} $loading={loading} $themename={themeName}><CgClose /></Button>
    </PlayerWrapper>
  );
}

function getVideoId(youtubeURL: string) {
  if (youtubeURL.includes('?si=')) {
    const array = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/');
    const videoId = array[array.length - 1];
    return videoId;
  }

  if (youtubeURL.includes('&list=')) {
    const array = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=');
    const videoId = array[array.length - 1];
    return videoId
  }

  const array = youtubeURL.split('watch?v=');
  const videoId = array[array.length - 1];
  
  if (videoId?.includes('&')) {
    return videoId.split('&')[0];
  }
  return videoId;
}

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* max-width: 1200px; */
  height: 60px;
  /* background-color: #112030; */
  /* @media (max-width: 768px) {
    width: 100%;
  } */
`;

const Iframe = styled.iframe`
  width: 100%;
  /* height: 100%; */
  border: 1px solid ${({theme}) => theme.colors.border};
  /* border-top: none; */
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-right: none;
`;

const Button = styled.button<{ $loading: boolean, $themename: string }>`
  width: 50px;
  height: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-left: none;
  background-color: black;
  &> svg {
    font-size: 30px;
    color: ${props => props.$themename === 'colorweakness' ? 'white' : 'red'};
  }
  &:hover {
    filter: none;
  }

  display: ${props => props.$loading ? 'none' : 'block'};
`;

// const pulse = keyframes`
//   0% {
//     opacity: 0.9;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 0.9;
//   }
// `;

// const SkeletonLoader = styled.div`
//   position: fixed;
//   top: 60;
//   left: 0;
//   height: 60px;
//   width: 80%; /////////
//   border-radius: 1rem;
//   border-right: none;
//   background-color: #7f8c94;
//   transform: translateX(12.5%);
//   @media (max-width: 1100px) {
//     width: 100%;
//     transform: translateX(0);
//   }
//   animation: ${pulse} 1s ease-in-out infinite;
// `;