
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store';

interface PaginationProps {
  children: ReactNode;
  itemsPerPage: number;
}

export function Pagination({ children, itemsPerPage }: PaginationProps) {
  const fixedItemIndex = useSelector((state: RootState) => state.fixedIndex.value);
  const totalChildren = React.Children.count(children);
  const totalPages = Math.ceil(totalChildren / itemsPerPage);
  const initialPage = Math.floor(fixedItemIndex / itemsPerPage); ////////
  console.log(`초기 페이지: ${initialPage + 1}`);

  const parentRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalHeight, setTotalHeight] = useState(0);

  const handleSetPage = (newPage: number) => {
    setCurrentPage(newPage);
  };


  useEffect(() => {
    if (parentRef.current) {
      const firstChild = parentRef.current.firstChild as HTMLElement;
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        const totalVerticalMargin = parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
        setTotalHeight((firstChild.offsetHeight + totalVerticalMargin) * itemsPerPage);
      }
      
    }
  }, [itemsPerPage, children])

  return (
    <Wrapper>
      <Container totalHeight={totalHeight}>
        <ChildrenContainer
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalHeight={totalHeight}
          ref={parentRef}
        >
          {children}
        </ChildrenContainer>
      </Container>
      <ButtonContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSetPage(index)}
            style={{ fontWeight: currentPage === index ? 'bold' : 'normal' }}
          >
            {index + 1}
          </button>
        ))}
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
  padding: 0.2em;
`

const Container = styled.div<{ totalHeight: number }>`
  overflow: hidden;
  position: relative;
  height: ${(props) => props.totalHeight}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ChildrenContainer = styled.div<{ currentPage: number; itemsPerPage: number; totalHeight: number }>`
  display: flex;
  width: 100%;
  
  flex-direction: column;
  align-items: center;
  
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => `translateY(-${props.currentPage * props.totalHeight}px)`};
  background-color: green;
`;


