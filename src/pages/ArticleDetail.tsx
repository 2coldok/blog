
import styled from 'styled-components';
import CustomMarkdown from '../components/CustomMarkdown';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export default function ArticleDetail() {
  const menuModal = useSelector((state: RootState) => state.modal.menuModal);
  const searchModal = useSelector((state: RootState) => state.modal.searchModal);
  const themeModal = useSelector((state: RootState) => state.modal.themeModal);
  const musicModal = useSelector((state: RootState) => state.modal.musicModal);
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
      {!(menuModal || searchModal || themeModal || musicModal) && <Comments />}
    </Container>
  );
}

const Container = styled.div`
  
  /* padding-left: 8em;
  padding-right: 8em; */

  padding: 1em;
  width: 100%;
  height: auto;
  
  color: white;
  
  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`