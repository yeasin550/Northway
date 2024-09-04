import * as ReactDOM from "react-dom/client";
import './index.css'
import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
