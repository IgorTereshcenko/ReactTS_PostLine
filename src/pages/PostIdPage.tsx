import React, { FC, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {useParams} from 'react-router-dom';
import { editPost, fetchPostsById } from '../API/PostService';
import postImage from '../resurses/postImage.png';
import { fetchCommentById } from '../API/PostService';
import '../styles/postIdPage.scss';
import Loading from '../components/Loading';
import Error from '../components/Error';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import MyInput from '../components/UI/input/MyInput';

type ParamsId = {
    id: string
}

const PostIdPage:FC = () => {

    const {post,comments,isLoading,error} = useAppSelector(state => state.postsReducer);
    const params = useParams<ParamsId>();
    const dispatch = useAppDispatch();

    const [modalVisible, setModalVisible] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newBody, setNewBody] = useState('')

    const onEditPost = (id: number) => {
        dispatch(editPost({
            id: id,
            newTitle: newTitle,
            newBody: newBody
        }))
        setModalVisible(false)
    }

    useEffect(() => {
        dispatch(fetchPostsById(params.id))
        dispatch(fetchCommentById(params.id))
    },[])

    const onModalShow = () => {
        setModalVisible(true)
    }

    const onModalClose = () => {
        setModalVisible(false)
        setNewBody('')
        setNewTitle('')
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onModalClose()
        }
    }, [onModalClose])

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
    },[onKeyDown])
    
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
                <MyButton onClick={onModalShow}>Редактировать</MyButton>
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
            <MyModal visible={modalVisible} onClick={onModalClose}>
                <MyInput
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    type='text'
                    placeholder='Введите новое название'/>
                <MyInput
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                    type='text'
                    placeholder='Введите новое название'/>
                <MyButton onClick={() => onEditPost(post.id)}>Подтвердить</MyButton>
                <MyButton onClick={onModalClose}>Отменить</MyButton>
            </MyModal>
        </div>
    )
}

export default PostIdPage;
