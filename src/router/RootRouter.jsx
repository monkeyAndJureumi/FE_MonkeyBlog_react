import {ROUTER} from "./router";
import {Home, MyPage, Search} from "../pages";
import {Route, Routes} from "react-router-dom";

export default function RootRouter(){
    const ListRoutes = [
        {
            path:ROUTER.HOME,
            component: <Home/>
        },
        {
            path:ROUTER.HOME,
            component: <Search />
        },
        {
            path:ROUTER.HOME,
            component: <MyPage />
        },
    ];

    return(
        <>
            <Routes>
                {ListRoutes.map((page, index) => {
                    return <Route key={page.path} path={page.path} element={page.component}/>
                })}
            </Routes>
        </>
    )
}

