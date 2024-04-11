// import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { musicOff } from '../redux/slice/musicSlice';

const PlayerWrapper = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 1200px; */
  height: 60px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 5%;
`

export default function MusicPlayer() {
  const youtubeUrl = useSelector((state: RootState) => state.music.url);
  const youtubeEmbedURL = `https://www.youtube.com/embed/${getVideoId(youtubeUrl)}`;
  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(musicOff());
  }

  return (
    <PlayerWrapper>
      <iframe
        id="player"
        title="youtube player"
        // type="text/html"
        width="95%"
        height="100%"
        src={youtubeEmbedURL}
        style={{ border: "none" }}
      ></iframe>
      <Button onClick={handleClick}>닫기</Button>
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