import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../../pages/home/home/Home";
import Catagorydatalode from "../../pages/home/homehade/catagories/categorydatalod/Catagorydatalode";

export const routs=createBrowserRouter(
    [
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:categoryname',
                element:<Catagorydatalode></Catagorydatalode>,
                loader: ({params}) => fetch(`http://localhost:5000/catagorie-lod-data/${params.categoryname}`)
            }
        ]
    }
])