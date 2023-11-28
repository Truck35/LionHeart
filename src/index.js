import * as React from 'react';
//import ReactDOM from 'react-dom/client';
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import RouterPaths from "./RouterPaths";

const router = RouterPaths();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


