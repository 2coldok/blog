import PoweredBy from "../meta/FooterData";
import styled from 'styled-components';

export default function MyFooter() {
  
  
  return (
    <StyledContainer>
      <h4>Powered by</h4>
      {PoweredBy.map((element) => (
        <a href={element.href} target="_blank" rel="noopener noreferrer">{element.name}</a>
      ))}
      <h4>Color theme is inspired by</h4>
      <a>Github Darkmode Theme</a>
      <a>Blizzard Video Game: StarCraft 1</a>
      <a>Starbucks Coffee Shop</a>
      <h4>Copyright 2024. Lee Chanwoong All rights reserved</h4>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: ${({theme}) => theme.colors.footerbackground};
  
  
  
  margin-top: 3em;
  padding: 0.5em;
  
  & > h4 {
    color: ${({theme}) => theme.colors.footersubtitle};
    margin-bottom: 0.4em;
    font-size: 0.9em;
  }

  & > a {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.4em 0.7em;
    border-radius: 0.4em;
    margin: 0.3em 0.6em;
    border: 1px solid ${({theme}) => theme.colors.footerlinkborder};
    background-color: ${({theme}) => theme.colors.footerlinkbackground};
    color : ${({theme}) => theme.colors.footerlinktext};
    text-decoration: none;

    &:hover {
      filter: brightness(125%);
    }
  }
`;