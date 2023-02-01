import React, { FC, useState, useEffect } from 'react'
import MyInput from './UI/input/MyInput'
import { useDispatch } from 'react-redux';
import { searchPosts } from '../store/slices/PostsSlice';

const PostFilter: FC = () => {

    const [query, setQuery] = useState<string>('');
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchPosts(query))
        console.log('поиск!!!')
    },[query])

    return (
        <div className='postFilter'>
            <MyInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Поиск...'
                type='text'/>
        </div>
    )
}

export default PostFilter
