import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';
// import { Pagination } from '../components/Pagenation';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';
import { getTags } from '../util/SearchEngine';
// import { useDispatch } from 'react-redux';
// import { setFixedIndex } from '../redux/slice/fixedIndexSlice';
import { ArticlesData, iconMapping } from '../meta/ArticlesData';

import Pagination4 from '../util/Pagination4';


export default function CategoryArticles() {
  // const dispatch = useDispatch();
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();

  if (category === undefined) {
    return <h1>category is undefined</h1>
  }
  const handleClick = (title: string) => () => {
    // dispatch(setFixedIndex(githubIssuesManager?.getIndexInCategoryByTitle(category, title)));
    navigate(`/${category}/${encodeURIComponent(title)}`);
    window.scrollTo(0, 0);
  }

  const article = ArticlesData.find((article) => article.category === category)!;
  // 
  if (!article) {
    return <h1>No data available for this category</h1>
  }
  const Icon = iconMapping[article.icon];
  
  return (
    <StyledContainer>
      <h1><Icon />{`${category} (${githubIssuesManager?.getCategoryPostCount(category)})`}</h1>

      <Pagination4
        itemsPerPage={5}
        items={githubIssuesManager?.getIssuesByCategory(category)?.map((issue, index, array) => (
          <ArticleList onClick={handleClick(issue.title)}>
            <h2><span>#{array.length - index}</span> {issue.title}</h2>
            <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
            <Tag>
              <button>{githubIssuesManager.getCategoryByTitle(issue.title)}</button>
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
  min-height: 700px;
  /* padding: 1em; */
  /* margin-top: 1em; */

  color: white;
  
  /* @media (max-width: 768px) {
    width: 95%;
  } */

  & > h1 {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* font-size: 2.5em; */
    
    color: ${({theme}) => theme.colors.clicked};
    
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
  /* margin-bottom: 0.3rem; */
  border-radius: 0.3em;
  padding: 0.3rem 1.3rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.headline};
  
  & > h2 {
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
      font-size: 0.9em;
      color: ${({theme}) => theme.colors.number};
    }
  }

  & > p {
    margin-top: 0.1rem;
    
    color: ${({theme}) =>  theme.colors.date};
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
    margin-left: 0;
    background-color: ${({theme}) => theme.colors.categorytagbackground};
    color: ${({theme}) => theme.colors.categorytagtext};
    border: 1.5px solid ${({theme}) => theme.colors.clicked};
    
    font-size: 0.8em;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 2em;
    white-space: nowrap;
  }

  & > p {
    margin : 0.3rem;
    margin-left: 0;
    background-color: ${({theme}) => theme.colors.tagbackground};
    color: ${({theme}) => theme.colors.tagtext};
    border: 1.5px solid ${({theme}) => theme.colors.tagborder};
    padding: 0.5rem;
    border-radius: 2em;
    font-size: 1em;
    font-weight: 600;
    white-space: nowrap;
  }
`