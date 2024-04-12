import styled from "styled-components";

// import React from 'react';
export default function Home() {
  
  return (
    <HomeContainer>
      홈이에용
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 1em;
  width: 100%;
  
  color: white;

  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`
