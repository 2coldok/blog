import styled from 'styled-components';
import { HiOutlineRocketLaunch } from "react-icons/hi2"; // 스타크래프트
import { VscColorMode } from "react-icons/vsc"; // 색약모드 (고대비)
import { IoLogoGithub } from "react-icons/io5"; // 깃허브
import { SiStarbucks } from "react-icons/si"; // 스타벅스
import { useThemeChange } from '../hook/ThemeHook';

export default function ThemeMode() {
  const { themeName, setThemeName } = useThemeChange();

  return (
    <StyledContainer $theme={themeName}>
      <button className='github' onClick={() => setThemeName('github')}><IoLogoGithub />깃허브: Default</button>
      <button className='starcraft' onClick={() => setThemeName('starcraft')}><HiOutlineRocketLaunch />스타크래프트</button>
      <button className='colorweakness'><VscColorMode />색약모드</button>
      <button className='starbucks' onClick={() => setThemeName('starbucks')}><SiStarbucks />스타벅스</button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div<{ $theme: string }>`
  background-color: ${({theme}) => theme.colors.background};

  display: flex;
  flex-direction: column;
  width: 200px;
  height: 170px;

  border-radius: 1rem;
  border: 2px solid ${({theme}) => theme.colors.border};
  margin-top: 1rem;

  
  
  & > button {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1em;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};
    back
    padding: 0.3rem 1rem;
    flex: 1;
    
    & > svg {
      font-size: 1.3em;
      margin-right: 0.3em;
    }

    &.github {
      border-top-left-radius: 0.9rem;
      border-top-right-radius: 0.9rem;
      background-color: ${prop => prop.$theme === 'github' && prop.theme.colors.border};
    }

    &.starcraft {
      background-color: ${prop => prop.$theme === 'starcraft' && prop.theme.colors.border};

    }

    &.colorweakness {
      background-color: ${prop => prop.$theme === 'colorweakness' && prop.theme.colors.border};
    }

    &.starbucks {
      border-bottom-left-radius: 0.9rem;
      border-bottom-right-radius: 0.9rem;
      border-bottom: none;
      background-color: ${prop => prop.$theme === 'starbucks' && prop.theme.colors.border};
    }
  }
  
  
`

