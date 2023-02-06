import React, { FC, useState, useEffect } from 'react'
import MyInput from './UI/input/MyInput'
import { searchPosts,sortedPosts } from '../store/slices/PostsSlice';
import MySelect from './UI/select/MySelect';
import { useAppDispatch } from '../hooks/redux';
import '../styles/postFilter.scss';
import sortIcon from '../resurses/icons/sortIcon.svg';

const PostFilter:FC = () => {

    const [query, setQuery] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchPosts(query));
        console.log('поиск!!!')
    },[query])

    useEffect(() => {
        dispatch(sortedPosts(sort as 'title' | 'body'));
        console.log('сортировка')
    },[sort])

    return (
        <div className='postFilter'>
            <MyInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Поиск...'
                type='text'/>
            <div className="postFilter__selectWrapper">
                <MySelect
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    defaultValue='сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}/>
                    <img src={sortIcon} alt="" />
            </div>    
        </div>
    )
}

export default PostFilter;
