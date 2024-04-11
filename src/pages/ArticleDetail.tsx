
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useLocation } from 'react-router-dom';

export default function ArticleDetail() {
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { state } = useLocation();
  const id: number = state.id;
  const article = githubIssuesManager?.getIssueById(id)?.shift(); /// shift오류 생각하기.

  return (
    <Container>
      {/* <h3>{article?.title}</h3> */}
      <CustomMarkdown data={article?.body} />
    </Container>
  );
}

const Container = styled.div`
  
  margin: 0;
  padding: 1em;
  width: 100%;
  height: auto;

  
  color: white;
  overflow-y: auto;

  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`