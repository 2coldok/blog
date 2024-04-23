import { Endpoints } from "@octokit/types";

export type IssuesData =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type Issues =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export type FetchedIssues = Issues | undefined;

type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

type Label = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
};

type Milestone = {
  id: number;
  node_id: string;
  url: string;
  html_url: string;
  labels_url: string;
  number: number;
  state: string;
  title: string;
  description: string;
  creator: User;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  due_on: string;
};

export type Issue = {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: User;
  labels: Label[];
  assignee: User;
  milestone: Milestone;
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request?: {
      url: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
  };
  closed_at: string;
  created_at: string;
  updated_at: string;
  closed_by: User;
};
