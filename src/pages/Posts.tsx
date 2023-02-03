import React, { FC,useState,useEffect, SetStateAction } from 'react'
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
import MySelect from '../components/UI/select/MySelect';


interface ILimitAndPage {
    limit: number;
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
            .then(totalCount => setTotalPages(getPageCount(totalCount,limitAndPage.limit)));
    },[limitAndPage])

    const changePage = (page:number) => {
        setLimitAndPage({...limitAndPage, page: page})
        dispatch(fetchPosts(limitAndPage));
    }

    if(isLoading) {
        return <h2>Loading</h2>
    } else if (error) {
        return <h2>Error</h2>
    }

    return (
        <div className='posts'>
            <div>
                <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
                <PostFilter/>
                <MySelect
                value={limitAndPage.limit}
                onChange={e => setLimitAndPage(e.target.value)}
                defaultValue='колличество элементов на странице'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'все'}
                ]}/>
            </div>
            <MyModal visible={modal} onClick={() => setModal(false)}>
                <PostForm setModal={setModal}/>
            </MyModal>
            <PostList posts={filterPosts}/>
            <Pagination 
                page={limitAndPage.page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    )
}

export default Posts;
