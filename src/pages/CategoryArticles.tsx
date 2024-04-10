import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';

export default function CategoryArticles() {
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();
  const handleClick = (title: string, id: number) => () => {
    navigate(`/${category}/${title}`, { state: { id } });
  }
  

  return (
    <Container>
      <h1>{`여기는 ${category}의 포스터를 보여주고 있어요`}</h1>

      {githubIssuesManager?.getIssuesByCategory(category!)?.map((article) => (
        <List key={article.id}>
          <button onClick={handleClick(article.title, article.id)}>{article.title}</button>
        </List>
        
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.li`
  margin-bottom: 10px;
`

