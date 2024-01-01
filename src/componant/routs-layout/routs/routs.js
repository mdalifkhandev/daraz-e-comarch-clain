import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../../pages/home/home/Home";

export const routs=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])