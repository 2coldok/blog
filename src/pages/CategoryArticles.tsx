import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';
import { Pagination } from '../components/Pagenation';

export default function CategoryArticles() {
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();
  const handleClick = (title: string) => () => {
    navigate(`/${category}/${title}`);
  }
  
  return (
    <Wrapper>
      <h1>{`여기는 ${category}의 포스터를 보여주고 있어요`}</h1>
      
  
      <Pagination heightPerPage={100} totalHeight={500}>
        {githubIssuesManager?.getIssuesByCategory(category!)?.map((issue) => (
          <List key={issue.id} onClick={handleClick(issue.title)}>
            <h2>{issue.title}</h2>
            <p>{issue.updated_at}</p>
          </List>
        ))}
      </Pagination>
        
        
    </Wrapper>
  );
}

const Wrapper = styled.ul`
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
  /* position: relative;
  z-index: 3; */
`;

const List = styled.li`
  margin-bottom: 10px;

  // 다른 요소와 간섭을 피하기 위해 스태킹 컨텍스트 생성.
  /* position: relative;
  z-index: 1; */
`