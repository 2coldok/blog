import { createHashRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GithubIssuesProvider } from "./context/GithubIssuesContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// page 
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';

// redux
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import CategoryArticles from './pages/CategoryArticles.tsx';
import ArticleDetail from './pages/ArticleDetail.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';


const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: ":category", element: <CategoryArticles />},
      {path: ":category/:title", element: <ArticleDetail />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GithubIssuesProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </GithubIssuesProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
