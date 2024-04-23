// import { SitemapStream, streamToPromise } from 'sitemap/dist/index.js';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Octokit } from "octokit";
import { Issue, IssuesData } from './types/models';

const GITHUB_AUTH_TOKEN = import.meta.env.VITE_GITHUB_AUTH_TOKEN.replaceAll(
  "?",
  ""
);

const octokit = new Octokit({
  auth: GITHUB_AUTH_TOKEN,
});

async function fetchGithubIssues() {
  const response: IssuesData = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "2coldok",
    repo: "react-blog",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    }
  });

  const issues = response.data as Issue[];

  // const filtedIssues = issues.filter(issue => typeof issue.labels[0] === 'object' && "name" in issue.labels[0] && typeof issue.labels[0].name === 'string');

  return issues.map((issue) => ({
    url: `/${encodeURIComponent(issue.labels[0].name)}/${encodeURIComponent(issue.title)}`,
    changefreq: 'weekly',
    priority: 1
  }));
}

export async function generateSitemap() {
  const issues = await fetchGithubIssues();
  const sitemapStream = new SitemapStream({ hostname: 'https://2coldok.github.io/blog/' });

  const outputPath = 'dist/sitemap.xml';
  sitemapStream.pipe(createWriteStream(outputPath));

  issues.forEach(issue => sitemapStream.write(issue));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('sitemap 을 dist 폴더에 생성 완료');
}

(async () => {
  await generateSitemap();
})();
