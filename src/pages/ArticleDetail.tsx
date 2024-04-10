
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useLocation } from 'react-router-dom';

export default function ArticleDetail() {
  const { githubIssuesManager } = useGithubIssuesMananger();
  const { state } = useLocation();
  const id: number = state.id;

  return (
    <div>
      <h1>아티클 디테일</h1>
      {githubIssuesManager?.getIssueById(id)?.map((article) => (
        <>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </>       
      ))}

    </div>
  );
}

