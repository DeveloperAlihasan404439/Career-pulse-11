import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";
import LogIn from "../Authentication/LogIn/LogIn";
import SingUp from "../Authentication/SingUp/SingUp";
import DatelisCatagory from "../../companent/Catagoreis/DatelisCatagory";
import MyBids from "../MyBids/MyBids";
import AddJobs from "../AddJobs/AddJobs";
import MyPostedJobs from "../MyPostedJobs/MyPostedJobs";
import Updated from "../MyPostedJobs/Update/Updated";
import RoutError from "../RoutError/RoutError";
import BidRequest from "../MyBids/BidRequest";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<RoutError/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/details/:id',
                element: <DatelisCatagory/>,
                loader: ({params})=>fetch(`http://localhost:5000/catagorys/${params.id}`)

            },
            {
                path: '/addjobs',
                element: <AddJobs/>
            },
            {
                path: '/myPostedJobs',
                element: <MyPostedJobs/>
            },
            {
                path: '/myPostedJobs/:id',
                element: <Updated/>,
                loader: ({params})=>fetch(`http://localhost:5000/catagorys/${params.id}`)
            },
            {
                path: '/myBids',
                element: <MyBids/>
            },
            {
                path: '/bidRequest',
                element: <BidRequest/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/sinup',
                element: <SingUp/>
            },
        ]
    }
])