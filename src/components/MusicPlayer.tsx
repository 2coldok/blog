import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store';

const PlayerWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  height: 60px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Ybutton = styled.button`
  width: 5%;
`

export default function MusicPlayer() {
  const youtubeUrl = useSelector((state: RootState) => state.music.url);
  const youtubeEmbedURL = `https://www.youtube.com/embed/${getVideoId(youtubeUrl)}`;

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
      <Ybutton>닫기</Ybutton>
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