import React, { FC } from 'react'
import { IPosts } from '../types/IPosts'
import '../styles/postItem.scss'
import deleteicon from '../resurses/icons/delete-icon.svg';
import {removePost} from '../store/slices/PostsSlice';
import { useAppDispatch } from '../hooks/redux';
import {useNavigate} from 'react-router-dom';
import MyButton from './UI/button/MyButton';

interface IPostItemProps {
    posts: IPosts
}

const PostItem:FC<IPostItemProps> = ({posts}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className='postItem'>
            <strong className="postItem__title">{posts.id}.{posts.title}</strong>
            <div className="postItem__body">{posts.body}</div>
            <span onClick={() => dispatch(removePost(posts.id))} className='postItem__delete'>
                <img src={deleteicon} alt="delete icon" />
            </span>
            <MyButton onClick={() => navigate(`/posts/${posts.id}`)}>Открыть</MyButton>
        </div>
    )
}

export default PostItem;
