import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useGithubIssuesMananger } from "../hook/GithubIssuesManager";
import { FetchedIssues } from "../api/GithubAPI";
import { getAccentedTarget, getNormalizeStringInput, getNormalizeTagBundle, getTags, judgeTagMatchByHuristic, judgeTitleMatchByHuristic } from "../util/SearchEngine";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../redux/slice/modalSlice";
import { TbSearch } from "react-icons/tb"; // 검색
import { IoCloseOutline } from "react-icons/io5"; // 닫기
// import { SlClose } from "react-icons/sl";

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
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(setSearchModal(false));
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
      <SearchForm onSubmit={handleSubmit}>
        <TbSearch />
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleCloseClick}><IoCloseOutline /></button>
      </SearchForm>

      <SearchListContainer>
        {filtedIssues?.map((issue) => (
          
          <List onClick={handleClick(typeof issue.labels[0] === 'object' && issue.labels[0] !== null ? issue.labels[0].name : '', issue.title)}>
            <Title><h2 dangerouslySetInnerHTML={{ __html: getAccentedTarget(text, issue.title)}}></h2></Title>
            
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
  background-color: ${({theme}) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:100%;

  margin: 0;
  padding: 1em;
  border: 2px solid ${({theme}) => theme.colors.border};
  border-radius: 1em;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  
  border: 1.5px solid ${({theme}) => theme.colors.clicked};
  border-radius: 0.3em;

  & > svg {
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-size: 1.5em;
  }
  & > input {
    background-color: transparent;

    width: 90%;
    height: 80%;

    outline: none;
    border-style: none;
    font-size: 1.4em;
    color: ${({theme}) => theme.colors.text};
  }

  & > button {
    display: flex;
    margin-left: 0.8em;
    & > svg {
      font-size: 2.5em;
    }
  }
`;

const SearchListContainer = styled.ul`
  /* background-color: coral; */

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 500px;
  border-radius: 0.4em;

  overflow-y: auto;
`;

const List = styled.li`
  background-color: ${({theme}) => theme.colors.background};
  border: 2px solid ${({theme}) => theme.colors.block};
  border-radius: 0.9em;
  
  
  width: 100%;
  
  margin-bottom: 0.3em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  padding-top: 0;
  padding-bottom: 0.8em;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.block};
  }
`;


const Title = styled.div`
  /* background-color: #4c4c9f; */
  font-size: 1.2em;

  & > h2 {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Tag = styled.div`
  /* background-color: #4c4c9f; */
  background-color: ${({theme}) => theme.colors.border};

  
  display: inline-block;
  
  padding: 0.5em;
  margin-right: 1em;
  margin-bottom: 0.5em;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 2em;
  
`;
