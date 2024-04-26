# 📝 깃허브 이슈 블로그
깃허브 이슈에 작성한 글을 깃허브 API를 통해 해당 이슈의 데이터를 불러옵니다.  
이때 불러온 깃허브 이슈의 데이터를 다음과 같이 활용하여 개발된 블로그 입니다.
```
issue.title : 포스트 제목  
issue.updated_at : 포스트 작성일  
issue.body : 포스트 내용  
issue.labels[0].name : 포스트 카테고리  
issue.milestone.title : 포스트의 태그
```

---

## 블로그 개발 스택
- Yarn berry PnP
- React Vite
- TypeScript
- Styled-Components  
- React-Router-Dom
- TanStack React Query
- Redux Toolkit
- Github Pages Hosting
- Github API Octokit
- React Markdown
- Vite-Plugin-Sitemap
- React Helmet
- React Icons
- Utterances
