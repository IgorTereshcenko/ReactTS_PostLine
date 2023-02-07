import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {useParams} from 'react-router-dom';
import { fetchPostsById } from '../API/PostService';
import postImage from '../resurses/postImage.png';
import { fetchCommentById } from '../API/PostService';
import '../styles/postIdPage.scss';
import Loading from '../components/Loading';
import Error from '../components/Error';

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
        return <Loading/>
    } else if (error) {
        return <Error/>
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
            <h3>Комментарии:</h3>
            <div className="comments">
                {comments.map(comm => 
                    <div className="comments__wrapper" key={comm.id}>
                        <strong className="comments__email">{comm.email}</strong>
                        <div className="comments__body">{comm.body}</div>
                    </div>    
                )}
            </div>
        </div>
    )
}

export default PostIdPage;
