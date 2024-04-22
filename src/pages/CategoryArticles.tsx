import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';
// import { Pagination } from '../components/Pagenation';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';
import { getTags } from '../util/SearchEngine';
import { useDispatch } from 'react-redux';
import { setFixedIndex } from '../redux/slice/fixedIndexSlice';
import { ArticlesData, iconMapping } from '../meta/ArticlesData';

import Pagination4 from '../util/Pagination4';


export default function CategoryArticles() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();

  if (category === undefined) {
    return <h1>category is undefined</h1>
  }
  const handleClick = (title: string) => () => {
    dispatch(setFixedIndex(githubIssuesManager?.getIndexInCategoryByTitle(category, title)));
    navigate(`/${category}/${encodeURIComponent(title)}`);
    window.scrollTo(0, 0);
  }

  const article = ArticlesData.find((article) => article.category === category)!;
  const Icon = iconMapping[article.icon];
  
  return (
    <StyledContainer>
      <h1><Icon />{`${category}`}</h1>

      <Pagination4
        itemsPerPage={5}
        items={githubIssuesManager?.getIssuesByCategory(category)?.map((issue, index, array) => (
          <ArticleList onClick={handleClick(issue.title)}>
            <h1><span>#{array.length - index}</span> {issue.title}</h1>
            <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
            <Tag>
              {getTags(issue.milestone?.title).map((tag) => (
                <p>{tag}</p>

              ))}
            </Tag>
          </ArticleList>
        )) || []}
      />      
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  min-height: 800px;
  /* padding: 1em; */
  /* margin-top: 1em; */

  color: white;
  
  @media (max-width: 768px) {
    width: 95%;
  }

  & > h1 {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-size: 2.5em;
    
    color: ${({theme}) => theme.colors.clicked};
    
    
    border-radius: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    

    & > svg {
      margin-right: 0.5rem;
    }
  }
`;

const ArticleList = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.3rem;
  border-radius: 0.3em;
  padding: 0.3rem 1.3rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.headline};
  
  & > h1 {
    color: ${({theme}) => theme.colors.text};
    word-wrap: break-word;      /* 긴 단어가 경계를 넘어가면 줄바꿈 */
    overflow-wrap: break-word;  /* 과도하게 긴 단어를 다음 줄로 넘기도록 함 */
    white-space: normal;        /* 공백을 기준으로 자동 줄바꿈 */
    /* text-align: center; */
    width: 90%;                 /* 컨테이너 너비의 90%만 사용 */
    margin-top: 1rem;
    margin-bottom: 0;
    
    margin-right: auto;
    
    // article order number
    & > span {
      font-size: 1.9rem;
      color: ${({theme}) => theme.colors.subtitle};
    }
  }

  & > p {

    margin-top: 0.1rem;
    
    color: ${({theme}) =>  theme.colors.subtitle};
  }

  &:hover {
    filter: brightness(125%);
    cursor: pointer;
  }
`

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5em;
  
  letter-spacing: 0.5px;
  & > button {
    margin: 0.3rem;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.clicked};
    border: 1.5px solid ${({theme}) => theme.colors.clicked};
    
    font-size: 1em;
    font-weight: 600;
    padding: 0.7rem;
    border-radius: 2em;
    white-space: nowrap;
  }

  & > p {
    margin : 0.3rem;
    background-color: #347D39;
    color: #FFFFFF;
    border: 1.5px solid #556355;
    padding: 0.7rem;
    border-radius: 2em;
    font-size: 1em;
    font-weight: 600;
    white-space: nowrap;
  }
`