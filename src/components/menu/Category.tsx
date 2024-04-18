import styled from 'styled-components';
import { ArticleSortData, ArticlesData, iconMapping } from '../../meta/ArticlesData';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuModal } from '../../redux/slice/modalSlice';
import { useEffect, useState } from 'react';

export default function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleListClick = (category: string) => () => {
    dispatch(setMenuModal(false));
    navigate(`/${category}`);
  }

  // 메뉴창에서 현재 보고있는 카테고리를 파란색으로 강조해주는 기능
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const { category } = useParams();
  useEffect(() => {
    if (category === undefined) {
      setCurrentDomain('');
    } else {
      setCurrentDomain(category);
    }
  }, [category])

  

  return (
    <StyledContainer>
      {ArticleSortData.map((sort) => (
        <>
          <p>{sort}</p>
          {ArticlesData.filter((article) => article.sort === sort).map((article) => {
            const Icon = iconMapping[article.icon];
            return (
              <Article key={article.id} onClick={handleListClick(article.category)} $articlename={article.category} $domain={currentDomain}>
                
                <Icon />
                {article.name}
              </Article>
            )
          })}
        </>
      ))} 
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* margin: 0; */
  

  & > p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: ${({theme}) => theme.colors.subtitle};
  }

  // Article
  & > li {
    display: flex;  
    margin-bottom: 10px;
    font-size: 20px;
    /* background-color: gray; */
    font-weight: 600;
    border-radius: 0.3em;
    padding: 0.2em;
    

    & > svg {
      margin-right: 10px;
      margin-left: 10px;
    }

    &:hover {
      filter: brightness(125%);
      background-color: ${({theme}) => theme.colors.border};
      cursor: pointer;
    }
  }
`;

// 메뉴바에서 클릭되거나 해당 카테고리 도메인에 접속했을 시 theme 의 clicked 색상 적용
const Article = styled.li<{ $articlename: string, $domain: string }>`
  color: ${(props) => props.$articlename === props.$domain ? props.theme.colors.clicked : ''};
`;
