import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createHashRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound';
import PowerOff from './pages/PowerOff/PowerOff';
import PowerOn from './pages/PowerOn/PowerOn';
import Css from './components/css/Css';
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <PowerOff /> },
      { path: "off", element: <PowerOff /> },
      { path: "on", element: <PowerOn /> },
      { path: "css", element: <Css />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// process.env.PUBLIC_URL