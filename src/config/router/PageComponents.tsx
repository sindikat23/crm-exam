import { lazy } from "react";

const Login = lazy(() => import("../../pages/Auth/Login/login"));
const NotFound = lazy(() => import("../../pages/Errors/notFound"));
const Dashboard = lazy(() => import("../../pages/Dashboard/dashboard"));



export{
    Login,
    NotFound,
    Dashboard,    
}