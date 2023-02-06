import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyForm from '../components/UI/form/MyForm'
import MyInput from '../components/UI/input/MyInput'
import '../styles/login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const Login:FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const signIn = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setErrorMessage(errorMessage);    
            });
            setEmail('');
            setPassword('');
    }

    return (
        <div className='login'>
            <h1 className='login__title'>PostLine</h1>
            <div className="login__wrapper">
                <h1 className='login__auth'>Авторизация</h1>
                <MyForm onSubmit={signIn}>
                    <MyInput 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        type='email' 
                        placeholder='введите email '
                        required/>
                    <MyInput 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        type='password' 
                        placeholder='введите пароль '
                        required/>
                    <MyButton type='submit'>Войти</MyButton>
                </MyForm>
                <div className="login__noReg">
                    Не зарегистрированы? <Link to='/registration'>Зарегистрироваться</Link>
                </div>
                <div className="login__errorMessage">
                    {errorMessage ? 'Не верный логин или пароль' : null}
                </div>
            </div>
        </div>
    )
}

export default Login
