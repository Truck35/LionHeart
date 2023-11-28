import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Music from "./Music";

export const RouterPaths = () =>{
   const router = createBrowserRouter([
        {
            element:<App/>,
            path:"/",
            errorElement:"PageNotFound",
        },
        {
            element:<Music/>,
            path:"music",
        }
        
    ]);
    return router;
}

export default RouterPaths;

