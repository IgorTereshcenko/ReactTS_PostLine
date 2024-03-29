import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyForm from './UI/form/MyForm'
import MyInput from './UI/input/MyInput'
import '../styles/postForm.scss'
import { useAppDispatch } from '../hooks/redux'
import { createPost } from '../API/PostService'


interface IPostFormProps {
    setModal:Dispatch<SetStateAction<boolean>>;
}

const PostForm:FC<IPostFormProps> = ({setModal}) => {

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const dispatch = useAppDispatch();

    const onCreatePost = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newPost = {
            id: Math.floor(Math.random() * (10000 - 1)) + 1,
            title,
            body
        }
        setModal(false);
        setTitle('');
        setBody('');

        dispatch(createPost(newPost));  
    }

    return (
        <div className='postForm'>
            <MyForm onSubmit={onCreatePost}>
                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Введите название поста'
                    type='text'
                    required/>
                <textarea 
                    className='postForm__text'
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                    placeholder='Введите описание поста'
                    required
                    >
                </textarea>
                <MyButton type='submit'>Создать</MyButton>
            </MyForm>
        </div>
    )
}

export default PostForm
