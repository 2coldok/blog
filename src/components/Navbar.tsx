import { useNavigate } from "react-router-dom";

import ToolBox from "./ToolBox";
import Menu from "./menu/Menu";

import styled from "styled-components";


export default function Navbar() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  
  

  return (
    <StyledContainer>

      <LeftContainer>
        <Menu />
        <HomeButton onClick={handleHomeButtonClick}>
          <img src="/blog/image/mylogo.png" alt="My Logo" />
          <span>Chanwoong <span className="blog">Blog</span></span>
        </HomeButton>
      </LeftContainer>

      <RightContainer>
        <ToolBox />
      </RightContainer>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.colors.navbarbackground};
  
  /* border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem; */
  border-bottom: 1px solid ${({theme}) => theme.colors.navbarborder};
  
  
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  
  height: 60px;

  padding-left: 4em;
  padding-right: 4em;

  @media (max-width: 900px) {
    padding-left: 1em;
    padding-right: 1em;
  }

  /* border: 1px solid ${({theme}) => theme.colors.border}; */
  /* border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  
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
    font-size: 1.6em;
    margin-left: 2px;

    & > span.blog {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  



  & > svg {
    font-size: 2.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
  }

  & > img {
    width: 2em;
    height: 2em;
    margin-left: 0.3em;
    margin-right: 0.4em;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
`;
