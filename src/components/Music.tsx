// import React from 'react';
import { IMusic, MusicContents } from '../meta/MusicContents';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { musicOn, setUrl } from '../redux/slice/musicSlice';
import { setMusicModal } from '../redux/slice/modalSlice';

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
    <StyledContainer>
      {MusicContents.map((music: IMusic) => (
        <>
          <TitleButton onClick={handleMusicClick(music.youtubeUrl, music.title)} $title={music.title} $track={currentTrack}>{music.title} - {music.singer}</TitleButton>
          
        </>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 2em 0.2em;
  
`;



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

const TitleButton = styled.button<{ $title: string, $track: string }>`
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: 500;
  background-color: transparent;
  border-radius: 0.4em;
  color: ${props => props.$title === props.$track ? '#66B2FF' : '#AEBACB'};
  padding: 0.4em 1em;
  /* border-radius: 0.5em; */
  
  &:hover {
    background-color: ${({theme}) => theme.colors.border};
  }

`;
