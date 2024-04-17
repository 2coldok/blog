import { FaCat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ToolBox from "./ToolBox";
import Menu from "./Menu";

import styled from "styled-components";

export default function Navbar() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate('/');
  };
  
  return (
    <StyledContainer>

      <LeftContainer>
        <Menu />
        <HomeButton onClick={handleHomeButtonClick}>
          <FaCat />
          <span>Chan's Blog</span>
        </HomeButton>
      </LeftContainer>

      <RightContainer>
        <ToolBox />
      </RightContainer>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.colors.background};

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 60px;

  padding-left: 1em;
  padding-right: 1em;
`;

const LeftContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  & > span {
    font-size: 2em;
  }

  & > svg {
    font-size: 2.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
`;
