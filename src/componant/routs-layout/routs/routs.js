import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../../pages/home/home/Home";
import Catagorydatalode from "../../pages/home/homehade/catagories/categorydatalod/Catagorydatalode";
import Productdetails from "../../pages/prosucts/producdetails/productdetails/Productdetails";
import Payment from "../../pages/prosucts/producdetails/payment/Payment";
import Displayerror from "../../hocks/displayerror/Displayerror";

export const routs=createBrowserRouter(
    [
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Displayerror></Displayerror>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:categoryname',
                element:<Catagorydatalode></Catagorydatalode>,
                loader: ({params}) => fetch(`http://localhost:5000/catagorie-lod-data/${params.categoryname}`)
            },
            {
                path:'/producdetails/:id',
                element:<Productdetails></Productdetails>,
                loader: ({params})=>fetch(`http://localhost:5000/productdetails/${params.id}`)
            },
            {
                path:`/producdetails/payment/:id`,
                element:<Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/productdetails/${params.id}`)
            }
        ]
    }
])
