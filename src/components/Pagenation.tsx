
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


interface PaginationProps {
  children: ReactNode;
  itemsPerPage: number;
}

export function Pagination({ children, itemsPerPage }: PaginationProps) {
  const fixedItemIndex = useSelector((state: RootState) => state.fixedIndex.value);
  const totalChildren = React.Children.count(children);
  // 실제 페이지 개수.
  const totalPages = Math.ceil(totalChildren / itemsPerPage);
  const initialPage = Math.floor(fixedItemIndex / itemsPerPage); ////////
  console.log(`초기 페이지: ${initialPage + 1}`);

  const parentRef = useRef<HTMLDivElement>(null);
  // 첫번째 페이지는 0으로 시작.
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalHeight, setTotalHeight] = useState(0);

  const handleSetPage = (direction: string) => () => {
    if (direction === 'left') {
      setCurrentPage((prev) => prev === 0 ? prev : prev - 1);
    }

    if (direction === 'right') {
      setCurrentPage((prev) => prev === (totalPages - 1) ? prev : prev + 1);
    }



  }


  useEffect(() => {
    if (parentRef.current) {
      const firstChild = parentRef.current.firstChild as HTMLElement;
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        const totalVerticalMargin = parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
        // 0.3 : 원인을 모르는 미세한 차이때문에 0.3더해줌..
        setTotalHeight((firstChild.offsetHeight + totalVerticalMargin + 0.3) * itemsPerPage);
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
        <LeftButton $currentpage={currentPage}  onClick={handleSetPage('left')}><FaArrowLeft /></LeftButton>
        <RightButton $currentpage={currentPage} $totalpages={totalPages} onClick={handleSetPage('right')}><FaArrowRight /></RightButton>
      </ButtonContainer>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  
  padding: 0.9em;
`

const Container = styled.div<{ totalHeight: number }>`
  overflow: hidden;
  position: relative;
  height: ${(props) => props.totalHeight}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  
  justify-content: center;
  align-items: center;
  flex-direction: row;

  & > button {
    width: 5em;
    font-size: 2em;
  }
`

const ChildrenContainer = styled.div<{ currentPage: number; itemsPerPage: number; totalHeight: number }>`
  display: flex;
  width: 100%;
  
  flex-direction: column;
  align-items: center;
  
  /* transition: transform 0.3s ease-in-out; */
  transform: ${(props) => `translateY(-${props.currentPage * props.totalHeight}px)`};
  /* background-color: green; */
`;

const LeftButton = styled.button<{ $currentpage: number }>`
  background-color: transparent;
  color: ${(prop) => prop.$currentpage === 0 ? 'gray' : 'green'};
`;

const RightButton = styled.button<{ $currentpage: number, $totalpages: number }>`
  background-color: transparent;
  color: ${(props) => (props.$currentpage + 1) === props.$totalpages ? 'gray' : 'green'};
`
