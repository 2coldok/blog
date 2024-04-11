import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGithubIssuesMananger } from "../hook/GithubIssuesManager";
import { FetchedIssues } from "../api/GithubAPI";

export default function Search() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const { githubIssuesManager } = useGithubIssuesMananger();
  const [filtedArticles, setFiltedArticles] = useState<FetchedIssues>([]);

  useEffect(() => {
    if (text.trim().length !== 0) {
      setFiltedArticles(githubIssuesManager?.filterIssuesBySearchEngine(text));
    } else {
      setFiltedArticles([]);
    }
    
    return () => console.log('검색 리스트 만들기 useEffect 초기화');
  }, [text])

  
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} autoFocus />
        <button>검색</button>
      </form>

      <SearchListContainer>
        {filtedArticles?.map((article) => (
          
          <li>{article.title} +++  {article.milestone?.title}<br></br></li>
          
        ))}

      </SearchListContainer>
    </Container>
  );
}

const Container = styled.div``;

const SearchListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 80%;
  background-color: white;
`
