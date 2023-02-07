import React, { FC } from 'react'
import '../styles/about.scss';

const About:FC = () => {

    return (
        <div className='about'>
            <div className="about__wrapper">
                <h2 className='about__title'>Этот небольшой проект,разрабатывался в качестве практики по React-TypeScript-Redux</h2>
                <h3 className='about__strong'>Использованные технологии/реализованный фукционал:</h3>
                <ul className='about__ul'>
                    <li>Регистрация и авторизация с использованием сервиса Firebase</li>
                    <li>Redux Toolkit в качестве стейт менеджера</li>
                    <li>Практика написание собственных хуков</li>
                    <li>Реализация поиска,сортировки,пагинации</li>
                    <li>jsonplaceholder в качестве fake rest API</li>
                    <li>Запросы через createAsyncThunk</li>
                    <li>Маршрутизация через React-router-dom v6</li>
                    <li>Реализация собственных UI компонентов</li>    
                </ul>
            </div>
        </div>
    )
}

export default About;
