import { useState } from "react";
import { IoMail } from "react-icons/io5"; // 메일
import { IoIosCopy } from "react-icons/io"; // 복사
import { IoCloseOutline } from "react-icons/io5"; // 닫기

import styled from "styled-components";

export default function GmailButton() {
  const [button, setButton] = useState(false);
  const [copy, setCopy] = useState(false);

  const copyToClipBoard = async (target: string) => {
    try {
      await navigator.clipboard.writeText(target);
      setCopy(true);
    } catch (error) {
      setCopy(false);
    }
  }

  const handleCopyClick = () => copyToClipBoard('2coldok@gmail.com');
  const handleGmailClick = () => setButton(true);
  const handleCloseClick = () => {
    setButton(false);
    setCopy(false);
  };

  return (
    <>
      {button ? (
        <AfterContainer>
          <CopyContainer $copy={copy}>
            <span onClick={handleCopyClick}><p>{copy ? 'Copied!' : '2coldok@gmail.com'}</p><IoIosCopy /></span>
            <IoCloseOutline onClick={handleCloseClick} />
          </CopyContainer>
        </AfterContainer>
      ) : (
        <BeforeContainer onClick={handleGmailClick}>
          <IoMail/>
          <p>Mail</p>
        </BeforeContainer>
      )}
    </>
  )
}

const BeforeContainer = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 0.4em;
  margin-bottom: 0.5em;

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
`;

const CopyContainer = styled.div<{ $copy: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > span {
    display: flex;
    align-items: center;
    font-size: ${(prop) => prop.$copy ? '25px' : '14px'};
    color: ${({theme}) => theme.colors.clicked};
    &:hover {
      filter: brightness(125%);
      cursor: pointer;
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
