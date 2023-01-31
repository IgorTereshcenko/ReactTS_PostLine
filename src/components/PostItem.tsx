import React, { FC } from 'react'
import { IPosts } from '../types/IPosts'
import '../styles/postItem.scss'

interface IPostItemProps {
    posts: IPosts
}

const PostItem:FC<IPostItemProps> = ({posts}) => {

    return (
        <div className='postItem'>
            <div className="postItem__title">{posts.id}.{posts.title}</div>
            <div className="postItem__body">{posts.body}</div>
        </div>
    )
}

export default PostItem
