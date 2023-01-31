import React from 'react'
import {Routes,Route} from "react-router-dom";
import { auth } from '../firebase/firebaseConfig';
import {useAuthState} from "react-firebase-hooks/auth";
import { privatRoutes, publicRoutes } from '.';
import ErrorPage from '../pages/ErrorPage';


function AppRouter() {

    const [user] = useAuthState(auth);

    return (
        user ? 
        <Routes>
            {privatRoutes.map(route =>
                <Route path={route.path} element={<route.element/>} key={route.path}/>)}
                {<Route path="/*" element={<ErrorPage to="/error" replace />} /> }
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path} element={<route.element/>} key={route.path}/>)}  
        </Routes>
    )
}

export default AppRouter;