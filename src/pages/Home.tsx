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
  width: 80%;
  height: 100%;
  background-color: #0f2129;
  overflow-y: auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
