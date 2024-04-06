import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GithubIssuesProvider } from "./context/GithubIssuesContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GithubIssuesProvider>
        <App />
      </GithubIssuesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
