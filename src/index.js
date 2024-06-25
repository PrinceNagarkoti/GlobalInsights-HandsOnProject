import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
// import Error from "./Components/Error";
import CountryDetail from "./Components/CountryDetail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      
      {
        path: '/:country',
        element: <CountryDetail />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

reportWebVitals();
