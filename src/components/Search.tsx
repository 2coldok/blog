import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useGithubIssuesMananger } from "../hook/GithubIssuesManager";
import { FetchedIssues } from "../api/GithubAPI";
import { getAccentedTarget, getNormalizeStringInput, getNormalizeTagBundle, getTags, judgeTagMatchByHuristic, judgeTitleMatchByHuristic } from "../util/SearchEngine";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../redux/slice/modalSlice";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleClick = (category: string | undefined, title: string) => () => {
    dispatch(setSearchModal(false));
    navigate(`/${category}/${title}`);
    
  }

  interface INormalizedIssuesSubset {
    id: number;
    title: string;
    tags: string[];
  }

  

  const { githubIssuesManager } = useGithubIssuesMananger();
  const [filtedIssues, setFiltedIssues] = useState<FetchedIssues>([]);
  


  const NormalizedIssuesSubset: INormalizedIssuesSubset[] | undefined = useMemo(() => {
    const issues = githubIssuesManager?.getAllIssues();
    
    return issues?.map((issue) => ({id: issue.id, title: getNormalizeStringInput(issue.title), tags: getNormalizeTagBundle(issue.milestone?.title)}))
  },[githubIssuesManager])

  
  useEffect(() => {
    if (text.trim().length !== 0) {
      const normalizedText = getNormalizeStringInput(text);
      const filtedNormalizedIssues = NormalizedIssuesSubset?.filter((issue) => judgeTitleMatchByHuristic(normalizedText, issue.title) || judgeTagMatchByHuristic(normalizedText, issue.tags));
      
      const filtedIssuesBySearchEngine = githubIssuesManager?.getIssuesById(filtedNormalizedIssues?.map((item) => item.id) || []);
      setFiltedIssues(filtedIssuesBySearchEngine);

      
    } else {
      setFiltedIssues([]);
    }
    
    return () => console.log('검색 리스트 만들기 useEffect 초기화');
  }, [text, NormalizedIssuesSubset, githubIssuesManager])

  
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>검색</button>
      </form>

      <SearchListContainer>
        {filtedIssues?.map((issue) => (
          
          <List onClick={handleClick(typeof issue.labels[0] === 'object' && issue.labels[0] !== null ? issue.labels[0].name : '', issue.title)}>
            <Title><h3 dangerouslySetInnerHTML={{ __html: getAccentedTarget(text, issue.title)}}></h3></Title>
            
            {getTags(issue.milestone?.title).map((tag) => (
              <Tag><span dangerouslySetInnerHTML={{ __html: getAccentedTarget(text, tag)}}></span></Tag>
            ))}  
          </List>
          
        ))}
        

      </SearchListContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: purple;
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

const SearchListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  background-color: white;
`
const List = styled.li`
  width: 100%;
  background-color: grey;
  margin-bottom: 2px;

  &:hover {
    cursor: pointer;
  }
  
`

const Title = styled.div`
  
`
const Tag = styled.div`
  display: inline-block;
  background-color: #8a5353;
  margin-right: 1em;
`