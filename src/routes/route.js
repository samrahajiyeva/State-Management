import Basket from "../pages/Basket/Basket";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import SiteRoot from "../pages/SiteRoot/SiteRoot";

export const ROUTES = [{
    path: "/",
    element: <SiteRoot/>,
    children: [{
        path: "",
        element: <Home />
    }, 
    {
        path: ":id",
        element: <Detail />
    } ,
    {
        path: "basket",
        element: <Basket/>
    }]
}]