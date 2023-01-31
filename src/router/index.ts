import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Registration from "../pages/Registration";

interface IRoutes {
    path: string,
    element: React.ComponentType
}

export enum ComponentPath {
    REGISTRATION = '/registration',
    LOGIN = '/',
    POSTS = '/',
    ABOUT = '/about'
}

export const publicRoutes:IRoutes[] = [
    {path: ComponentPath.REGISTRATION, element: Registration},
    {path: ComponentPath.LOGIN, element: Login}   
]

export const privatRoutes:IRoutes[] = [
    {path: ComponentPath.POSTS, element: Posts},
    {path: ComponentPath.ABOUT, element: About},    
]