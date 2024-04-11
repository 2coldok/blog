
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useParams } from 'react-router-dom';

export default function ArticleDetail() {
  
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { title } = useParams();

  if (title === undefined) {
    return <h1>게시글의 제목이 undefined</h1>;
  } 
  const decodedTitle = decodeURIComponent(title);
  
  return (
    <Container>
      {githubIssuesManager?.getIssueByTitle(decodedTitle)?.map((article) => (
        <CustomMarkdown data={article.body} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 1em;
  width: 100%;
  height: auto;
  
  color: white;

  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`