# 📘 깃허브 이슈 블로그
Github Issues Blog
```ts
type Issue = {
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
```

```zsh
issue.id : 포스트 리스트 아이디
issue.title : 포스트 제목  
issue.updated_at : 포스트 작성일  
issue.body : 포스트 내용  
issue.labels[0].name : 포스트 카테고리  
issue.milestone.title : 포스트 태그
```

## Stack
- Yarn Berry Plug'n'Play
- React Vite
- TypeScript
- Styled-Components  
- React-Router-Dom
- TanStack React Query
- Redux Toolkit
- Github Pages Hosting
- Github REST API  with Octokit
- React Markdown
- Vite-Plugin-Sitemap
- React Helmet
- React Icons
- Utterances
- YouTube Embed Videos
