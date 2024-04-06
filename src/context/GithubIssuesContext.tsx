import { GithubIssues } from "../api/GithubAPI";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useState, useEffect } from "react";
import { getIssuesData } from "../api/GithubAPI";

export interface GithubIssuesContextType {
  githubIssuesManager: GithubIssues | undefined;
}

// GithubIssuesContext와 기본값 생성
export const GithubIssuesContext = createContext<GithubIssuesContextType | undefined>(undefined);

// Provider 컴포넌트의 props 타입 정의
interface GithubIssuesProviderProps {
  children: ReactNode;
}

// GithubIssuesProvider 컴포넌트 정의
export const GithubIssuesProvider: React.FC<GithubIssuesProviderProps> = ({ children }) => {
  const [githubIssuesManager, setGithubIssuesManager] = useState<GithubIssues>();

  const { isLoading, data: issuesData, error } = useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssuesData(),
    staleTime: 60 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  if (error !== null) {
    throw new Error(`Github API ERROR : ${error}`);
  }

  useEffect(() => {
    const githubIssues = new GithubIssues(issuesData?.data);
    setGithubIssuesManager(githubIssues);

    return () => {console.log('LogSpy : new GithubIssues 인스턴스 생성')};
  }, [issuesData]);

  return (
    <>
      {!isLoading && (
        <GithubIssuesContext.Provider value={{ githubIssuesManager }}>
          {children}
        </GithubIssuesContext.Provider>
      )}
    </>
  );
};
