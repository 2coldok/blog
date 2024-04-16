// import React from 'react';
import { IMusic, MusicContents } from '../meta/MusicContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { musicOn, setUrl } from '../redux/slice/musicSlice';
import { setMusicModal } from '../redux/slice/modalSlice';
import { BsMusicPlayerFill } from "react-icons/bs";
import { useState } from 'react';

export default function Music() {
  const dispatch = useDispatch();
  const [currentTrack, setCurrentTrack] = useState('');
  const handleMusicClick = (url: string, title: string) => () => {
    dispatch(setUrl(url));
    dispatch(musicOn());
    dispatch(setMusicModal(false));
    setCurrentTrack(title);
  }

  
    
  return (
    <MusicWrapper>
      
      <Header>
        
        <BsMusicPlayerFill />
        <h1>Music List</h1>
        
        
        
      </Header>
      
      {MusicContents.map((music: IMusic) => (
        <Button onClick={handleMusicClick(music.youtubeUrl, music.title)} $title={music.title} $track={currentTrack}>{music.title} - {music.singer}</Button>
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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 50px;
  border-style: none;
  background-color: #101418;
  /* background-color: green; */
  justify-content: center;
  align-items: center;
  color: #AEBACB;
  border-radius: 1rem;
  & > svg {
    margin-right: 10px;
    font-size: 35px;
  }

  

  &:hover {
    filter: none;
  }
`

// const CloseButton = styled.button`
  
//   margin-top: 20px;
//   margin-left: 40px;
//   height: 50px;
//   border-style: none;
//   background-color: #101418;
//   & > svg {
//     color: #AEBACB;
//     font-size: 30px;
    
//   }

//   &:hover {
//     filter: none;
//   }
// `

const Button = styled.button<{ $title: string, $track: string }>`
  margin: 0.2em;
  font-size: 1em;
  background-color: transparent;
  color: ${props => props.$title === props.$track ? '#66B2FF' : '#AEBACB'};
  padding: 0.4em 1em;
  border-radius: 0.5em;
  
  &:hover {
    background-color: #1F262E;
  }

`