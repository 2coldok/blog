import { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";
// import { judgeTagMatchByHuristic, judgeTitleMatchByHuristic } from "../util/SearchEngine";

export type IssuesData =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type Issues =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export type FetchedIssues = Issues | undefined;

const GITHUB_AUTH_TOKEN = import.meta.env.VITE_GITHUB_AUTH_TOKEN.replaceAll(
  "?",
  ""
);

const octokit = new Octokit({
  auth: GITHUB_AUTH_TOKEN,
});

export const getIssuesData = async (): Promise<IssuesData> => {
  return await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "2coldok",
    repo: "blog-posts",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

export class GithubIssues {
  constructor(private issues: FetchedIssues) {}

  getAllIssues(): FetchedIssues {
    return this.issues;
  }

  getIssuesByCategory(category: string): FetchedIssues {
    return this.issues?.filter(
      (issue) =>
        typeof issue.labels[0] === "object" &&
        issue.labels[0] !== null &&
        "name" in issue.labels[0] &&
        issue.labels[0].name === category
    );
  }

  getCategoryPostCount(category: string): number {
    const count = this.getIssuesByCategory(category)?.length;

    if (count === undefined) {
      return 0;
    }
    
    return count;
  }
  getCategoryByTitle(title: string) {
    const issue =  this.issues?.find((issue) => issue.title === title);
    if (typeof issue?.labels[0] === "object" && issue.labels[0] !== null && "name" in issue.labels[0]) {
      return issue.labels[0].name;
    } else { 
      throw new Error('label[0].name 에 접근 실패. 카테고리 이름에 접근실패');
    }
  }

  // tag는 이슈마다 겹칠 수 있음.
  getIssuesByTag(tag: string): FetchedIssues {
    return this.issues?.filter(
      (issue) =>
        issue.milestone !== null &&
        issue.milestone.title
          .split("#")
          .filter(Boolean)
          .map((element) => element.trim())
          .includes(tag.trim())
    );
  }

  getIssuesById(ids: number[]): FetchedIssues {
    return this.issues?.filter((issue) => ids.includes(issue.id));
  }

  getIssueByTitle(title: string) {
    const issue = this.issues?.find((issue) => issue.title === title);
    
    return issue;
  }

  getIndexInCategoryByTitle(
    category: string,
    title: string
  ): number | undefined {
    return this.getIssuesByCategory(category)?.findIndex(
      (issue) => issue.title === title
    );
  }

  // filterIssuesBySearchEngine(searchText: string): FetchedIssues {
  //   const normalizeSearchText = this.getNormalizeString(searchText);

  //   return this.issues?.filter((issue) => {
  //     const normalizeTitle = this.getNormalizeString(issue.title);
  //     const normalizeTags = this.getNormalizeTags(issue.milestone?.title);

  //     return (
  //       judgeTitleMatchByHuristic(normalizeSearchText, normalizeTitle) ||
  //       judgeTagMatchByHuristic(normalizeSearchText, normalizeTags)

  //     );
  //   });
  // }

  // private getNormalizeString(searchText: string): string {
  //   return searchText.trim().split(" ").join("").toLowerCase();
  // }

  // private getNormalizeTags(milestoneTitle: string | undefined): string[] {
  //   if (milestoneTitle !== undefined) {
  //     return milestoneTitle
  //       .split("#")
  //       .filter(Boolean)
  //       .map((tag) => this.getNormalizeString(tag));
  //   }
  //   return [""];
  // }
}
