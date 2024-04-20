import{ ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';


interface PaginationProps {
  items: ReactNode[];
  itemsPerPage: number;
}

export default function Pagination4({ items, itemsPerPage }: PaginationProps) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  //언마운트시 state 초기화
  const location = useLocation();
  useEffect(() => {
    return () => {
      setCurrentPage(0);
    }
  }, [location])

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleLeftClick = () => {
    setCurrentPage((prev) => prev === 0 ? prev : prev - 1);
  };

  const handleRightClick = () => {
    setCurrentPage((prev) => prev === (totalPages - 1) ? prev : prev + 1);
  };

  return (
    <StyledContainer>

      <ContentContainer>
        {items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
          <Page key={index}>
            {item}
          </Page>
        ))}
      </ContentContainer>

      <PageIndicatorContainer $currentpageindex={currentPage} $totalpages={totalPages}>
        <button onClick={handleLeftClick} className='prev'><HiChevronLeft />&nbsp;&nbsp;Previous</button>
        {[...Array(totalPages)].map((_, index) => (
          <PageIndicator
            key={index}
            onClick={() => changePage(index)}
            $active={index === currentPage}
          >
            {index + 1}
          </PageIndicator>
        ))}
        <button onClick={handleRightClick} className='next'>Next&nbsp;&nbsp;<HiChevronRight /></button>
      </PageIndicatorContainer>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ContentContainer = styled.div`
  

  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: flex-start; // 모든 자식 요소(아이템들)를 컨테이너의 상단으로 정렬 */
  /* flex: 1;  // 남은 공간을 모두 차지하도록 설정 */
`;

const Page = styled.ul`
  
  margin: 0.5em;
  
  /* display: flex; */
  

  align-items: center;  // 텍스트를 상자 중앙에 위치
  /* justify-content: start;  */
  /* width: 100%; */
  /* font-size: 20px; */
`;

const PageIndicatorContainer = styled.div<{$currentpageindex: number, $totalpages: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1em 0;  // 패딩으로 버튼의 높이 조정
  margin-top: 1.5em;
  
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    

    /* color: ${({theme}) => theme.colors.clicked}; */
    border-radius: 0.5em;
    padding: 0.5em;

    &.prev {
      color: ${(props) => props.$currentpageindex === 0 ? props.theme.colors.border : props.theme.colors.clicked };
    }

    &.next {
      color: ${(props) => props.$currentpageindex === (props.$totalpages - 1) ? props.theme.colors.border : props.theme.colors.clicked};
    }

    & > svg {
      /* margin: 0 1em; */
      /* font-size: 1em; */

    }
  }  

  & > span {
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.subtitle};
    margin: 0 1.5rem;
  }
`;

const PageIndicator = styled.button<{ $active: boolean }>`
  color: ${({theme}) => theme.colors.text};
  width: 2.5rem;
  margin: 0 5px;
  background-color: ${(prop) => (prop.$active ? prop.theme.colors.clicked : '')};
  /* border: 1px solid #ddd; */
  cursor: pointer;
`;