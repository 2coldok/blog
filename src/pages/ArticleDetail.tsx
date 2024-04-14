
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../components/Comments';

import { getTags } from '../util/SearchEngine';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';



export default function ArticleDetail() {
  const navigate = useNavigate();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { category, title } = useParams();

  if (title === undefined || category === undefined) {
    return <h1>카테고리, 타이틀 오류</h1>;
  } 
  const decodedTitle = decodeURIComponent(title);

  
  const handleTitleClick = (title: string) => () => {
    navigate(`/${category}/${title}`);
    window.scrollTo(0, 0);
  }

  const handleCategoryClick = () => {
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
        <h1>{category}의 다른글들 목록이에요</h1>
        
        {githubIssuesManager?.getIssuesByCategory(category)?.map((issue, index, array) => (
          <List onClick={handleTitleClick(issue.title)}>
            {issue.title === decodedTitle ? <h3 style={{backgroundColor: 'black'}}>{array.length - index}. {issue.title}</h3> : <h3>{array.length - index}. {issue.title}</h3>}
            <TagContainer>
              {getTags(issue.milestone?.title).map((tag) => (
                <p>#{tag}</p>
              ))}
            </TagContainer>
          </List>
        ))}
        
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
  border-radius: 1em;
  background-color: #292e3c;
  padding: 0.3rem;
  margin-bottom: 1rem;

  & > h1 {
    color: white;
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

  & > button {
    margin: 0.3rem;
    background-color: #3773af;
    padding: 0.7rem;
    border-radius: 1rem;
    white-space: nowrap;
  }

  & > p {
    margin : 0.3rem;
    background-color: #40734b;
    padding: 0.7rem;
    border-radius: 1rem;
    white-space: nowrap;
  }
`

const OtherIssuesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  border-radius: 1em;
  background-color: rgba(12, 1, 1);
  padding: 0.3rem;
  margin-bottom: 1rem;
  background-color: #292e3c;

  /* position: relative;
  z-index: 100; */
  
`

const List = styled.li`
  background-color: grey;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 90%;
  margin: 1rem;

  
`