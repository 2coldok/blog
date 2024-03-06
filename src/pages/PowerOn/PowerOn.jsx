import { useEffect } from "react";
import styles from "./PowerOn.module.css";

import ReactMarkdown from "react-markdown";

import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

// import { Octokit } from 'octokit';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: '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',
});



export default function PowerOn() {
  

  const {isLoading, error, data} = useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: '2coldok',
        repo: 'blog',
        per_page: 2
      })
      return result.data;
    }
  })
  
  
  return (
    <div className={styles.on}>
      <p>전원 켜짐</p>
      
      
      <ReactMarkdown></ReactMarkdown>
      
    </div>
  );
}

