
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import { getTags } from '../util/SearchEngine';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';
import { Pagination } from '../components/Pagenation';
import { useDispatch } from 'react-redux';
import { setFixedIndex } from '../redux/slice/fixedIndexSlice';



export default function ArticleDetail() {
  const navigate = useNavigate();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { category, title } = useParams();
  const dispatch = useDispatch();
  
  if (title === undefined || category === undefined) {
    return <h1>카테고리, 타이틀 오류</h1>;
  } 

  const decodedTitle = decodeURIComponent(title);
  

  const handleTitleClick = (title: string) => () => {
    dispatch(setFixedIndex(githubIssuesManager?.getIndexInCategoryByTitle(category, title)));
    navigate(`/${category}/${title}`);
    window.scrollTo(0, 0);
  }

  const handleCategoryClick = () => {
    dispatch(setFixedIndex(0));
    navigate(`/${category}`);
    window.scrollTo(0, 0);
  }
  
  


  return (
    <Wrapper>
      {githubIssuesManager?.getIssueByTitle(decodedTitle)?.map((issue) => (
        <IssueContainer>
          
          <TitleContainer>
            <h1>{issue.title}</h1>
            <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
            <TagContainer>
              <button onClick={handleCategoryClick}>{category}</button>
              {getTags(issue.milestone?.title).map((tag) => (
                <p>#{tag}</p>
              ))}
            </TagContainer>
            
          </TitleContainer>
          <CustomMarkdown data={issue.body} />
        </IssueContainer>
      ))}

      <OtherIssuesContainer>
        <h1>근처 또 다른 글들이에요</h1>
        
        <Pagination itemsPerPage={3}>
          {githubIssuesManager?.getIssuesByCategory(category)?.map((issue, index, array) => (
            
            <List onClick={handleTitleClick(issue.title)} $decodedtitle={decodedTitle} $issuetitle={issue.title}>
              <div><span>#{array.length - index} </span>{issue.title}</div>
              <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
            </List>
          ))}
        </Pagination>
      </OtherIssuesContainer>  
      <Comments />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; 이거하면 댓글 찌부됨*/ 
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 800px;
  padding: 1em;

  color: white;
  background-color: #112030;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const IssueContainer = styled.div`
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  background-color: #292e3c;
  padding: 0.3rem;
  border-bottom: 1px solid gray;
  
  & > h1 {
    color: white;
    word-wrap: break-word;      /* 긴 단어가 경계를 넘어가면 줄바꿈 */
    overflow-wrap: break-word;  /* 과도하게 긴 단어를 다음 줄로 넘기도록 함 */
    white-space: normal;        /* 공백을 기준으로 자동 줄바꿈 */
    text-align: center;         /* 제목을 중앙 정렬 */
    width: 90%;                 /* 컨테이너 너비의 90%만 사용 */
    margin-top: 1rem;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
  }

  & > p {
    margin-top: 0.1rem;
    color: grey;
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5em;

  & > button {
    margin: 0.3rem;
    background-color: #3773af;
    padding: 0.7rem;
    border-radius: 2em;
    white-space: nowrap;
  }

  & > p {
    margin : 0.3rem;
    background-color: #40734b;
    padding: 0.7rem;
    border-radius: 2em;
    white-space: nowrap;
  }
`

const OtherIssuesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  border-radius: 1em;
  
  /* padding: 0.3rem; */
  /* margin-bottom: 1rem; */
  background-color: #292e3c;

  & > h1 {
    /* margin: 0.5em; */
  }
  
`

const List = styled.li<{ $decodedtitle: string, $issuetitle: string }>`
  
  color: ${(props) => (props.$decodedtitle === props.$issuetitle) ? 'yellow' : 'white'};
  
  padding: 0.5em;
  width: 100%;
  border-radius: 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5em;

  & > div {
    font-weight: bolder;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  

    & > span {
      color: ${(props) => (props.$decodedtitle === props.$issuetitle) ? 'yellow' : '#aaaaaa'};
      font-size: 1em;
    }
  }

  & > p {
    color: #525252;
    font-size: 0.7em;
    margin-top: 0;
  }

  &:hover {
    filter: brightness(125%);
    background-color: #48484f;
    cursor: pointer;
  }
  
`