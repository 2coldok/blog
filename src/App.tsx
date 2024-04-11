import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function App() {
  const musicToggle = useSelector((state: RootState) => state.music.toggle);
  
  return (
    <div className="container">
      <Navbar />
      <div className="middle">
        {musicToggle && <MusicPlayer />}
        <Outlet />
      </div>
    </div>
  )
}

// {githubIssuesManager?.getAllIssues()?.map((issue) => (
//   <p>{issue.title}</p>
// ))}
