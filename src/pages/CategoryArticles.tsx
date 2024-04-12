import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';

export default function CategoryArticles() {
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();
  const handleClick = (title: string) => () => {
    navigate(`/${category}/${title}`);
  }
  
  return (
    <Container>
      <h1>{`여기는 ${category}의 포스터를 보여주고 있어요`}</h1>

      {githubIssuesManager?.getIssuesByCategory(category!)?.map((article) => (
        <List key={article.id}>
          <button onClick={handleClick(article.title)}>{article.title}</button>
        </List>
        
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  
  color: white;

  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const List = styled.li`
  margin-bottom: 10px;
`

