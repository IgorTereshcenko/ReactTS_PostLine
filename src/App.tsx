import React, { useEffect, useState } from 'react';
import { fetchPosts } from './API/PostService';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './router/AppRouter';
import './styles/app.scss';

const App = () => {

    const [limitAndPage, setLimitAndPage] = useState({
        limit:10,
        page:1
    });
    const {posts, isLoading, error} = useAppSelector(state => state.postsReducer);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts(limitAndPage));
    },[])

    return (
       <Router>
            <AppRouter/>
       </Router>
    )
}

export default App;