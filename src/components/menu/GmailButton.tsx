import { useState } from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";

export default function GmailButton() {
  const [gmailToggle, setGmailToggle]= useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = async (textTarget: string) => {
    try {
      await navigator.clipboard.writeText(textTarget);
      setCopySuccess(true);
    } catch (e) {
      setCopySuccess(false);
    }
  };

  const handleCopyClick = () => {
    copyToClipBoard('2coldok@gmail.com');
  }

  const handleGmailToggle = (state: boolean) => () => {
    setGmailToggle(state);
    setCopySuccess(false);
  }

  return (
    <>
      {gmailToggle ? (
        <Mini $copy={copySuccess}>
          <CopyButton onClick={handleCopyClick}>
            {copySuccess ? <p>Copied!</p> : <><p>2coldok@gmail.com</p><IoMdCopy/></>}
          </CopyButton>
          <IoCloseOutline onClick={handleGmailToggle(false)}/>
        </Mini>
      ) : (
        <Mini onClick={handleGmailToggle(true)} $copy={copySuccess}>
          <img
            src="https://2coldok.github.io/blog/image/gmail.png"
            alt="gmail"
          />
          Gmail
        </Mini>
      )}
    </>
  )
}

const Mini = styled.div<{$copy: boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${prop => prop.$copy ? 'space-between' : 'center'};
  
  width: 100%;
  
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  padding: 0.5em;
  border: 1px solid yellow;

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 0.5em;
    background-color: white;
    margin-right: 0.3em;
  }

  & > svg {
    font-size: 30px;
    margin-left: 0.5em;
    margin-right: 0.3em;
    
    &:hover {
      cursor: pointer;
      filter: brightness(125%);
    }
  }

  &:hover {
    cursor: pointer;
    filter: brightness(125%);
  }
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  color: #305fcb;
  background: transparent;

  & > svg {
    font-size: 30px;
  }
`