import { useState } from 'react';
import { IoLogoGithub } from "react-icons/io5"; // 깃허브
import { IoIosLink } from "react-icons/io"; // 링크
import { IoCloseOutline } from "react-icons/io5"; // 닫기

import styled from 'styled-components';

export default function GithubButton() {
  const [buttonState, setButtonState] = useState(false);

  const handleGithubClick = () => setButtonState(true);
  const handleCloseClick = () => setButtonState(false);

  return (
    <>
      {buttonState ? (
        <AfterContainer>
          <LinkContainer>
            <a href="https://github.com/2coldok" target='_blank'><p>2coldok</p><IoIosLink /></a>
            <IoCloseOutline onClick={handleCloseClick} />
          </LinkContainer>
        </AfterContainer>
      ) : (
        <BeforeContainer onClick={handleGithubClick}>
          <IoLogoGithub />
          <p>Github</p>
        </BeforeContainer>
      )}
    </>
  );
}

const BeforeContainer = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 0.4em;
  margin-bottom: 10px;
  
  & > svg {
    font-size: 2em;  
    margin-right: 0.4em;
  }

  & > p {
    font-size: 2em;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.border};
  }
`;

const AfterContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 20px;
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  & > a {
    display: flex;
    align-items: center;
    font-size: 25px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.clicked};
    &:hover {
      filter: brightness(125%);
    }
  }

  & > svg {
    font-size: 30px;
    &:hover {
      filter: brightness(125%);
      cursor: pointer;
    }
  }
`;
