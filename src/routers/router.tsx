import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetails from "../components/GameDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([ 
    { path: '', errorElement: <ErrorPage/> , element : <Layout/>, children : [
        {index: true , element : <HomePage/>},
        {path : 'game/:id', element : <GameDetails/>}
    ]},
])

export default router