import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GithubIssuesProvider } from "./context/GithubIssuesContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// redux
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import CategoryArticles from "./pages/CategoryArticles.tsx";
import ArticleDetail from "./pages/ArticleDetail.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";

// page
// import NotFound from './pages/NotFound.tsx';
import Home from "./pages/Home.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

// style
// import { ThemeProvider } from "styled-components";
// import { starcraftTheme } from "./styles/Theme.ts";
// import { darkTheme } from "./styles/Theme.ts";

// errorElement: <NotFound />,
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: ":category", element: <CategoryArticles /> },
      { path: ":category/:title", element: <ArticleDetail /> },
    ],
  },
], { basename: '/blog/' });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GithubIssuesProvider>
          <ThemeProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </GithubIssuesProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// React.StrictMode
