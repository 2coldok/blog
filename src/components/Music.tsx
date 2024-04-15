// import React from 'react';
import { IMusic, MusicContents } from '../meta/MusicContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { musicOn, setUrl } from '../redux/slice/musicSlice';
import { setMusicModal } from '../redux/slice/modalSlice';
import { FaArrowRight } from "react-icons/fa";


export default function Music() {
  const dispatch = useDispatch();
  const handleMusicClick = (url: string) => () => {
    dispatch(setUrl(url));
    dispatch(musicOn());
    dispatch(setMusicModal(false));
  }

  const handleCloseClick = () => {
    dispatch(setMusicModal(false));
  }
    
  return (
    <MusicWrapper>
      <CloseButton onClick={handleCloseClick}><FaArrowRight /></CloseButton>
      {MusicContents.map((music: IMusic) => (
        <Button onClick={handleMusicClick(music.youtubeUrl)}>{music.title} - {music.singer}</Button>
      ))}
    </MusicWrapper>
  );
}

const MusicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0.2em;
  /* align-items: center;  */
`

const CloseButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 50px;
  border-style: none;
  background-color: #101418;
  & > svg {
    color: #AEBACB;
    font-size: 40px;
  }

  &:hover {
    filter: none;
  }
`

const Button = styled.button`
  margin: 0.2em;
  font-size: 1em;
  background-color: transparent;
  color: #AEBACB;
  padding: 0.4em 1em;
  border-radius: 0.5em;
  
  &:hover {
    background-color: #1F262E;
  }

`