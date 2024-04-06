import { useGithubIssuesMananger } from "./hook/GithubIssuesManager";
import "./App.css";

export default function App() {
  const { githubIssuesManager } = useGithubIssuesMananger()

  return (
    <>
      {githubIssuesManager?.getAllIssues()?.map((issue) => (
        <p>{issue.title}</p>
      ))}
    </>
  )
}
