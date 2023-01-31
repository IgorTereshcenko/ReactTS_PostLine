import React, { FC, useState } from 'react'
import MyButton from '../components/UI/button/MyButton';
import MyForm from '../components/UI/form/MyForm';
import MyInput from '../components/UI/input/MyInput'
import '../styles/registration.scss';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration: FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const onRegistration = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            setEmail('');
            setPassword('');
    }
    
    return (
        <div className='registration'>
            <div className="registration__wrapper">
            <h1 className='registration__title'>Регистрация</h1>
                <MyForm onSubmit={onRegistration}>
                    <MyInput 
                        type='email' 
                        placeholder='Введите email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>
                    <MyInput 
                        type='password' 
                        placeholder='Введите пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required/>
                    <MyButton type='submit'>Зарегистрироваться</MyButton>
                </MyForm>
            </div>    
        </div>
    )
}

export default Registration;
