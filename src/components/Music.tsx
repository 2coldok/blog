import React from 'react';
import { IMusic, MusicContents } from '../meta/MusicContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { musicOn, setUrl } from '../redux/slice/musicSlice';


export default function Music() {
  const dispatch = useDispatch();
  const handleClick = (url: string) => () => {
    dispatch(setUrl(url));
    dispatch(musicOn());
  }
    
  return (
    <MusicWrapper>
      {MusicContents.map((music: IMusic) => (
        <li key={music.title}>
          <button onClick={handleClick(music.youtubeUrl)}>{music.title} - {music.singer}</button>
        </li>
      ))}
    </MusicWrapper>
  );
}

const MusicWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center; 
`
