import { createHashRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GithubIssuesProvider } from "./context/GithubIssuesContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';


const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GithubIssuesProvider>
        <RouterProvider router={router} />
      </GithubIssuesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
