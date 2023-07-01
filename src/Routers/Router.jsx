import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Banner from "../pages/Homepage/Banner";

export const routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main/>,
            children:[
                {
                    path: '/',
                    element: <Banner/>
                }
            ]
        }
    ]
)