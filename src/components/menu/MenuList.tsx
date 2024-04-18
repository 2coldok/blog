import GmailButton from "./GmailButton";
import GithubButton from "./GithubButton";
import Category from "./Category";

import styled from "styled-components";


export default function MenuList() {
  
  return (
    <StyledContainer>
      <GithubButton />
      <GmailButton />

      <Divider></Divider>
      <Category />

      
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 0.8em 1em;  
`;

const Divider = styled.div`
  background-color: ${({theme}) => theme.colors.border};
  height: 0.5px;
  /* margin: 7px 0; */
`;
