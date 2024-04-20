import{ ReactNode, useState } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  items: ReactNode[];
  itemsPerPage: number;
}

export default function Pagination2({ items, itemsPerPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
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

      <PageIndicatorContainer>
        {[...Array(totalPages)].map((_, index) => (
          <PageIndicator
            key={index}
            onClick={() => changePage(index)}
            isActive={index === currentPage}
          >
            {index + 1}
          </PageIndicator>
        ))}
      </PageIndicatorContainer>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  // 고정된 높이를 사용해야 아이템 개수가 줄어들었을때 레이아웃이 안망가짐
  /* height: 500px; */
`;

const ContentContainer = styled.div`
  background-color: coral;
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content: flex-start; // 모든 자식 요소(아이템들)를 컨테이너의 상단으로 정렬 */
  flex: 1;  // 남은 공간을 모두 차지하도록 설정
`;

const Page = styled.div`
  background-color: gray;
  
  /* display: flex; */
  color: black;

  align-items: center;  // 텍스트를 상자 중앙에 위치
  /* justify-content: start;  */
  /* width: 100%; */
  /* font-size: 20px; */
  
  & > div {
    
    background-color: purple;
    width: 90%;
    height: 90%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const PageIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7e577e;
  padding: 10px 0;  // 패딩으로 버튼의 높이 조정
`;

const PageIndicator = styled.button<{ isActive: boolean }>`
  
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
  border: 1px solid #ddd;
  cursor: pointer;
`;