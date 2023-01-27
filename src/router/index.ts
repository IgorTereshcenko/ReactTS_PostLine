import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Registration from "../pages/Registration";

export const publicRoutes = [
    {path: '/registration', element: Registration},
    {path: '/login', element: Login},
]

export const privatRoutes = [
    {path: '/posts', element: Posts},
]