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
import FuncPanel from '../components/FuncPanel';
import Loading from '../components/Loading';
import Error from '../components/Error';

export interface ILimitAndPage {
    limit: number | string;
    page: number;
}

const Posts:FC = () => {

    const [limitAndPage, setLimitAndPage] = useState<ILimitAndPage>({limit:10, page:1});
    const [totalPages, setTotalPages] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
  
    const {filterPosts, isLoading, error} = useAppSelector(state => state.postsReducer);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts(limitAndPage));
        fetchTotalCount()
            .then(totalCount => setTotalPages(getPageCount(totalCount,limitAndPage.limit as number)));
    },[limitAndPage])

    const changePage = (page:number) => {
        setLimitAndPage({...limitAndPage, page: page})
        dispatch(fetchPosts(limitAndPage));
    }

    if(isLoading) {
        return <Loading/>
    } else if (error) {
        return <Error/>
    }

    return (
        <div className='posts'>
            <FuncPanel
                limitAndPage={limitAndPage}
                setModal={setModal}
                setLimitAndPage={setLimitAndPage}/>
            <MyModal 
                visible={modal} 
                onClick={() => setModal(false)}>
                <PostForm setModal={setModal}/>
            </MyModal>
            <PostList 
                posts={filterPosts}/>
            <Pagination 
                page={limitAndPage.page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    )
}

export default Posts;
