import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {useParams} from 'react-router-dom';
import { fetchPostsById } from '../API/PostService';
import postImage from '../resurses/postImage.png';
import { fetchCommentById } from '../API/PostService'

type ParamsId = {
    id: string
}

const PostIdPage:FC = () => {

    const {post,comments,isLoading,error} = useAppSelector(state => state.postsReducer);
    const params = useParams<ParamsId>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPostsById(params.id))
        dispatch(fetchCommentById(params.id))
    },[])
    
    if(isLoading) {
        return <h2>Loading</h2>
    } else if (error) {
        return <h2>Error</h2>
    }

    return (
        <div className='postIdPage'>
            <div className="postIdPage__wrapper">
                <div className="postIdPage__image">
                    <img src={postImage} alt="forest" />
                </div>
                <h2 className='postIdPage__title'>{post.title}</h2>
                <div className="postIdPage__body">{post.body}</div>
            </div>
            
            <div className="comments">
                {comments.map(comm => 
                    <div className="comments__wrapper" key={comm.id}>
                        <div className="comments__email">{comm.email}</div>
                        <div className="comments__body">{comm.body}</div>
                    </div>    
                )}
            </div>
        </div>
    )
}

export default PostIdPage;
