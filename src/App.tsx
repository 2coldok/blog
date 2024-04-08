import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  


  return (
    <div className="container">
      <Navbar />
      <Outlet />      
    </div>
  )
}

// {githubIssuesManager?.getAllIssues()?.map((issue) => (
//   <p>{issue.title}</p>
// ))}
