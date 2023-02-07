import React from "react";

import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Registration from "../pages/Registration";
import Posts from "../pages/Posts";

interface IRoutes {
    path: string;
    element: React.ComponentType;
}

export enum ComponentPath {
    REGISTRATION = '/registration',
    LOGIN = '/',
    POSTS = '/',
    ABOUT = '/about',
    POSTSID = '/posts/:id'
}

export const publicRoutes:IRoutes[] = [
    {path: ComponentPath.REGISTRATION, element: Registration},
    {path: ComponentPath.LOGIN, element: Login}   
]

export const privatRoutes:IRoutes[] = [
    {path: ComponentPath.POSTS, element: Posts},
    {path: ComponentPath.ABOUT, element: About},
    {path: ComponentPath.POSTSID, element: PostIdPage},    
]