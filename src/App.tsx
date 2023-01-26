import React, { useEffect, useState } from 'react';
import { fetchPosts } from './API/PostService';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const App = () => {

    const [limit, setLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const {posts, isLoading, error} = useAppSelector(state => state.postsReducer)
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts(limit,page));
    },[])

    return (
        <div className='App'>
            {isLoading ? <h1>Loading</h1> : error ? <h1>error</h1> : 
                <div>
                    {posts.map(post =>
                        <div key={post.id}>
                            <div>{post.id}</div>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                    )} 
                </div>
            }   
        </div>
    )
}

export default App;