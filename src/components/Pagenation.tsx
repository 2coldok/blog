
import React, { useState } from 'react';
import styled from 'styled-components';

interface IPagination {
  children: React.ReactNode;
  heightPerPage: number;
  totalHeight: number;
}

export function Pagination({ heightPerPage, totalHeight, children }: IPagination) {
  const [currentPage, setCurrentPage] = useState(0);
  const handleClick = () => {
    setCurrentPage((prev) => prev + 1);
  }


  return (
    <>
      <Container totalHeight={totalHeight}>
        <Content page={currentPage} heightPerPage={heightPerPage}>{children}</Content>
      </Container>
      <button onClick={handleClick}>눌러봐용</button>
    </>
  )
}

const Container = styled.div<{ totalHeight: number }>`
  
  overflow-y: hidden;
  max-height: ${props => `${props.totalHeight}px`};

  /* position: relative;
  z-index: 0; */
  
`

const Content = styled.div<{page: number, heightPerPage: number}>`
  transform: ${props => `translateY(-${props.page * props.heightPerPage}px)`};
  /* position: relative;
  z-index: 0; */
`
