import React, { FC } from 'react';
import { IPosts } from '../types/IPosts';
import PostItem from './PostItem';
import '../styles/postList.scss';

interface IPostListProps {
    posts: IPosts[];
}

const PostList:FC<IPostListProps> = ({posts}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign:'center'}}>Постов нет</h1>
        )
    }

    return (
        <div className='postList'>
            <div className="postList__wrapper">
                {posts.map(post =>
                    <PostItem posts={post} key={post.id}/>  
                    
                )}
            </div>
        </div>
    )
}

export default PostList
