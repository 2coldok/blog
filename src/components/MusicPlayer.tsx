// import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { musicOff } from '../redux/slice/musicSlice';
import { CgClose } from "react-icons/cg";
import { useState } from 'react';

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* max-width: 1200px; */
  height: 60px;
  background-color: #112030;
  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

const Iframe = styled.iframe`
  width: 92%;
  /* height: 100%; */
  border: 2px solid #3b3b3b;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-right: none;

`

const Button = styled.button`
  width: 50px;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 2px solid #3b3b3b;
  border-left: none;
  background-color: black;
  &> svg {
    font-size: 30px;
    color: red;
  }
  &:hover {
    background-color: #242424;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a08c8c;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export default function MusicPlayer() {
  const [loading, setLoading] = useState(true);

  const youtubeUrl = useSelector((state: RootState) => state.music.url);
  const youtubeEmbedURL = `https://www.youtube.com/embed/${getVideoId(youtubeUrl)}`;
  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(musicOff());
  }
  
  

  return (
    <PlayerWrapper>
      {loading && <SkeletonLoader />}
      <Iframe
        id="player"
        title="youtube player"
        // type="text/html"
        src={youtubeEmbedURL}
        onLoad={() => setLoading(false)}
      ></Iframe>
      <Button onClick={handleClick}><CgClose /></Button>
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