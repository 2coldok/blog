import { Octokit } from "octokit";
import * as fs from 'fs';
import dotenv from "dotenv";
dotenv.config();

const GITHUB_AUTH_TOKEN = process.env.SCRIPT_GITHUB_AUTH_TOKEN.replaceAll("?", "");

const octokit = new Octokit({
  auth: GITHUB_AUTH_TOKEN,
});

async function fetchGithubIssues() {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "2coldok",
      repo: "blog-posts",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      }
    });

    if (!response || !response.data) {
      throw new Error('octokit을 통한 요청의 응답이 없거나, 응답의 data가 존재하지 않음');
    }
    
    response.data.forEach((issue) => {
      if (typeof issue.labels === "string" || !("name" in issue.labels[0]) || !(issue.labels[0].name) || !(issue.title)) {
        throw new Error('issue.labels 이 string 또는 issue.labels[0] 에 name 속성이 없음 또는 issue.labels[0].name 이 null또는 undefined');
      }
    })

    console.log('issues 데이터 fetch 성공');

    return response.data;
  } catch (error) {
    console.log('[ERROR] fetching issues: ', error);
    throw error;
  } 
}

async function createDynamicRoutesScriptFile() {
  try {
    const issues = await fetchGithubIssues();
    const dynamicRoutesForSitemap = issues.map((issue) => `${encodeURIComponent(issue.labels[0].name)}/${encodeURIComponent(issue.title)}`);

    fs.writeFileSync('dynamicRoutes.json', JSON.stringify(dynamicRoutesForSitemap, null, 2));

    console.log('DynamicRoutesScriptFile을 성공적으로 생성함');

  } catch (error) {
    console.error('DynamicRoutesScriptFile 생성 실패', error);
  }
}

(async () => {
  await createDynamicRoutesScriptFile();
})();
