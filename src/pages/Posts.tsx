import React, { FC,useState,useEffect } from 'react'
import { useAppSelector } from '../hooks/redux';
import { useAppDispatch } from '../hooks/redux';
import { fetchPosts, fetchTotalCount } from '../API/PostService';
import PostList from '../components/PostList';
import '../styles/posts.scss';
import Pagination from '../components/Pagination';
import { getPageCount } from '../utils/pages';
import PostForm from '../components/PostForm';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostFilter from '../components/PostFilter';

const Posts:FC = () => {

    const [limitAndPage, setLimitAndPage] = useState({limit:10, page:1});
    const [totalPages, setTotalPages] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    const {filterPosts, isLoading, error} = useAppSelector(state => state.postsReducer);
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts(limitAndPage));
        fetchTotalCount()
            .then(totalCount => setTotalPages(getPageCount(totalCount,limitAndPage.limit)));
    },[limitAndPage.page])

    const changePage = (page:number) => {
        setLimitAndPage({...limitAndPage, page: page})
        dispatch(fetchPosts(limitAndPage));
    }

    return (
        <div className='posts'>
            <div>
                <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
                <PostFilter/>
            </div>
            <MyModal visible={modal} onClick={() => setModal(false)}>
                <PostForm setModal={setModal}/>
            </MyModal>
            {isLoading ? <h1>Загрузка</h1> : error ? <h1>Ошибка</h1> :
                <PostList posts={filterPosts}/>
            }
            <Pagination 
                page={limitAndPage.page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    )
}

export default Posts;
