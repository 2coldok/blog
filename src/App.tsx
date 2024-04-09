import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function App() {
  const musicState = useSelector((state: RootState) => state.music.toggle);
  
  return (
    <div className="container">
      <Navbar />
      {musicState && <MusicPlayer />}
      <Outlet />
    </div>
  )
}

// {githubIssuesManager?.getAllIssues()?.map((issue) => (
//   <p>{issue.title}</p>
// ))}
