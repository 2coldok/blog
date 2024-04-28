
import styled, { ThemeContext } from 'styled-components';
import CustomMarkdown from '../components/markdown/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import { getTags } from '../util/SearchEngine';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';
import { useDispatch } from 'react-redux';
import { setFixedIndex } from '../redux/slice/fixedIndexSlice';

import { useContext } from 'react';
// import Pagination3 from '../util/Pagination3';
import { Helmet } from 'react-helmet';
// import Pagination4 from '../util/Pagination4';
import MiniPagination from '../util/MiniPagination';


export default function ArticleDetail() {
  const navigate = useNavigate();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { category, title } = useParams();
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  
  if (title === undefined || category === undefined) {
    return <h1>카테고리, 타이틀 오류</h1>;
  }
  
  const decodedCategory = decodeURIComponent(category);
  const decodedTitle = decodeURIComponent(title);
  const issue = githubIssuesManager?.getIssueByTitle(decodedTitle);

  if (!issue) {
    return <div>해당 이슈를 찾을 수 없습니다</div>
  }
  
  const handleTitleClick = (title: string) => () => {
    dispatch(setFixedIndex(githubIssuesManager?.getIndexInCategoryByTitle(category, decodedTitle)));
    navigate(`/${category}/${encodeURIComponent(title)}`);
    window.scrollTo(0, 0);
  }

  const handleCategoryClick = () => {
    dispatch(setFixedIndex(0));
    navigate(`/${category}`);
    window.scrollTo(0, 0);
  }

  // meta info
  const pageTitle = issue?.title as string;
  const date = issue.updated_at;
  const body = issue?.body as string;
  const pageUrl = `https://2coldok.github.io/blog/${decodedCategory}/${decodedTitle}`;
  const keywords = getTags(issue.milestone?.title).join(', ');
  const pageDescription = body.slice(0, 147).concat('...');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="article:published_time" content={date} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={pageUrl} />
        <meta name="author" content="이찬웅" />
      </Helmet>
  
      <StyledContainer>

        <IssueContainer>
          <TitleContainer>
            <h1>{issue.title}</h1>
            <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
            <TagContainer>
              <button onClick={handleCategoryClick}>{category}</button>
              {getTags(issue.milestone?.title).map((tag) => (
                <p>{tag}</p>
              ))}
            </TagContainer>
          </TitleContainer>
          <CustomMarkdown data={issue.body} />
        </IssueContainer>
        
        <OtherIssuesContainer>
          <h2>{category}의 또다른 글</h2>
          <MiniPagination
            itemsPerPage={3}
            
            items={githubIssuesManager?.getIssuesByCategory(category)?.map((issue, index, array) => (
              <OtherIssuesList key={issue.id} onClick={handleTitleClick(issue.title)} style={{color: decodedTitle === issue.title ? theme?.colors.clicked : ''}}>
                <h3><span>#{array.length - index}</span> {issue.title}</h3>
                <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
              </OtherIssuesList>
            )) || []}
          />  
        </OtherIssuesContainer>  

        <Comments />

      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  /* align-items: center; 이거하면 댓글 찌부됨*/ 
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* min-height: 800px; */
  /* padding: 1em; */
  margin-top: 1em;

  
  
  @media (max-width: 768px) {
    width: 95%;
    min-width: 300px;
  }
`

const IssueContainer = styled.article`
  
  width: 100%;
  /* background-color: ${({theme}) => theme.colors.block}; */
  border-radius: 1rem;
  margin-bottom: 1em;
  border: 1px solid ${({theme}) => theme.colors.border};
  
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  
  padding: 0.3rem;
  /* border: 1px solid ${({theme}) => theme.colors.border}; */
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.headline};
  
  & > h1 {
    color: ${({theme}) => theme.colors.text};
    word-wrap: break-word;      /* 긴 단어가 경계를 넘어가면 줄바꿈 */
    overflow-wrap: break-word;  /* 과도하게 긴 단어를 다음 줄로 넘기도록 함 */
    white-space: normal;        /* 공백을 기준으로 자동 줄바꿈 */
    text-align: center;         /* 제목을 중앙 정렬 */
    width: 90%;                 /* 컨테이너 너비의 90%만 사용 */
    margin-top: 1rem;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 2em;
  }
  
  // data
  & > p {
    margin-top: 0.1rem;
    color: ${({theme}) =>  theme.colors.date};
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5em;
  letter-spacing: 0.5px;
  & > button {
    margin: 0.3rem;
    background-color: ${({theme}) => theme.colors.categorytagbackground};
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
    background-color: ${({theme}) => theme.colors.tagbackground};
    color: ${({theme}) => theme.colors.tagtext};
    border: 1.5px solid ${({theme}) => theme.colors.tagborder};
    padding: 0.7rem;
    border-radius: 2em;
    font-size: 1em;
    font-weight: 600;
    white-space: nowrap;
  }
`

/////////////////////////////////////////////////////////
const OtherIssuesContainer = styled.section`
  /* background-color: ${({theme}) => theme.colors.headline}; */
  // 깃발
  background-color: ${({theme}) => theme.colors.block};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-radius: 1em;
  border: 1px solid ${({theme}) => theme.colors.border};

  & > h2 {
    color: ${({theme}) => theme.colors.subtitle};
  }
`;

const OtherIssuesList = styled.li`
  /* background-color: ${({theme}) => theme.colors.headline}; */
  color: ${({theme}) => theme.colors.text};
  padding: 0.5em 1.2em;
  /* border-radius: 1rem; */
  border-bottom: 0.5px solid ${({theme}) => theme.colors.border};
  margin: 0 0.5em;
  &:hover {
    filter: brightness(125%);
    cursor: pointer;
    
  }
  // 제목
  & > h3 {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;  
    margin-bottom: 0;
    font-size: 1.4em;
    // #number
    & > span {
      font-size: 0.9em;
      color: ${({theme}) => theme.colors.number};
    }
  }
  // 날짜
  & > p {
    margin-top: 0;
    font-size: 0.8em;
    color: ${({theme}) => theme.colors.date};
  }
`