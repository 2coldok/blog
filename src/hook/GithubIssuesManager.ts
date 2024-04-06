import { GithubIssuesContextType } from "../context/GithubIssuesContext";
import { GithubIssuesContext } from "../context/GithubIssuesContext";
import { useContext } from "react";

export const useGithubIssuesMananger = (): GithubIssuesContextType => {
  const context = useContext(GithubIssuesContext);
  if (context === undefined) {
    throw new Error("GithubIssuesContext 가 undefined 입니다.");
  }
  return context;
};

// 사용
// import { useGithubIssuesMananger } from ..
// const { githubIssuesManager } = useGithubIssuesMananger();
