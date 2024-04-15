import { useNavigate, useParams } from 'react-router-dom';
import { useGithubIssuesMananger } from '../hook/GithubIssuesManager';
import styled from 'styled-components';
// import { Pagination } from '../components/Pagenation';
import koreanDateTimeFromISO from '../util/KoreanDateTImeFromISO';
import { getTags } from '../util/SearchEngine';
import { useDispatch } from 'react-redux';
import { setFixedIndex } from '../redux/slice/fixedIndexSlice';


export default function CategoryArticles() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { githubIssuesManager } = useGithubIssuesMananger();
  const navigate = useNavigate();

  if (category === undefined) {
    return <h1>category is undefined</h1>
  }
  const handleClick = (title: string) => () => {
    dispatch(setFixedIndex(githubIssuesManager?.getIndexInCategoryByTitle(category, title)));
    navigate(`/${category}/${title}`);
  }
  
  return (
    <Wrapper>
      <h1>{`여기는 ${category}의 포스터를 보여주고 있어요`}</h1>
      
      {githubIssuesManager?.getIssuesByCategory(category)?.map((issue) => (
        <TitleContainer key={issue.id} onClick={handleClick(issue.title)}>
          <h1>{issue.title}</h1>
          <p>{koreanDateTimeFromISO(issue.updated_at)}</p>
          <TagContainer>
            <button>{category}</button>
            {getTags(issue.milestone?.title).map((tag) => (
              <p>#{tag}</p>
            ))}
          </TagContainer>
        </TitleContainer>
      ))}
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  padding: 1em;
  color: white;
  background-color: #112030;
`;

// 각 리스트 아이템 높이 : Listed height + margin*2
// const Listed = styled.div`
//   background-color: blue;
//   display: block;
//   align-items: center;
//   justify-content: center;
//   width: 80%;
//   height: 3em;
//   margin: 10px;

//   border-radius: 1rem;
 
//   padding: 0.5em;

//   font-size: 30px;

//   & > p {
//     text-align: center;
//     font-size: 10px;
//   }

//   & > div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow-x: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
    
//   }
// `
  // 다른 요소와 간섭을 피하기 위해 스태킹 컨텍스트 생성.
  /* position: relative;
  z-index: 1; */




const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10%;
  border-radius: 1em;
  background-color: #292e3c;
  padding: 0.3rem;
  margin-bottom: 1rem;

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