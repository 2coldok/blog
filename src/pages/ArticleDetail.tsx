
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getTags } from '../util/SearchEngine';


export default function ArticleDetail() {
  const navigate = useNavigate();
  const menuModal = useSelector((state: RootState) => state.modal.menuModal);
  const searchModal = useSelector((state: RootState) => state.modal.searchModal);
  const themeModal = useSelector((state: RootState) => state.modal.themeModal);
  const musicModal = useSelector((state: RootState) => state.modal.musicModal);
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
  
  return (
    <Wrapper>
      {githubIssuesManager?.getIssueByTitle(decodedTitle)?.map((issue) => (
        <IssueContainer>
          <Date>{issue.updated_at}</Date>
          <Category>{category}</Category>
          <TitleContainer>
            <h1>{issue.title}</h1>
            <TagContainer>
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
            {issue.title === decodedTitle ? <p style={{backgroundColor: 'black'}}>{array.length - index}. {issue.title}</p> : <p>{array.length - index}. {issue.title}</p>}
          </List>
        ))}
      </OtherIssuesContainer>  
      
      {!(menuModal || searchModal || themeModal || musicModal) && <Comments />}
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

const Date = styled.p`
  display: inline-block;
  padding: 0.7em;
  margin-right: 0.3rem;

  border-radius: 1em;
  background-color: #2c60a4;
`

const Category = styled.p`
  display: inline-block;
  padding: 0.7em;

  border-radius: 1em;
  background-color: #496d9d;
  
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 1em;
  background-color: rgba(12, 1, 1);
  padding: 0.3rem;
  margin-bottom: 1rem;

  & > h1 {
    color: white;
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  flex-wrap: wrap;
  gap: 0.5rem;

  & > p {
    margin : 0.3rem;
    background-color: #40734b;
    padding: 0.5rem;
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
`

const List = styled.li`
  
`