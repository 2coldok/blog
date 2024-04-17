import styled from 'styled-components';
import { ArticleSortData, ArticlesData, iconMapping } from '../../meta/ArticlesData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuModal } from '../../redux/slice/modalSlice';

export default function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleListClick = (category: string) => () => {
    dispatch(setMenuModal(false));
    navigate(`/${category}`);
  }

  return (
    <StyledContainer>
      {ArticleSortData.map((sort) => (
        <>
          <p>{sort}</p>
          {ArticlesData.filter((article) => article.sort === sort).map((article) => {
            const Icon = iconMapping[article.icon];
            return (
              <li key={article.id} onClick={handleListClick(article.category)}>
                <Icon />
                {article.name}
              </li>
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
