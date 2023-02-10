import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ComponentPath } from '../../../router';
import burgerMenu from '../../../resurses/icons/burger-menu.svg';
import './myBurger.scss';
import { auth } from '../../../firebase/firebaseConfig';

const MyBurger = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='burger' onClick={() => setShow(!show)}>
            <img src={burgerMenu} alt="burger menu" />
            <div className={show ? "burger__menu overlay" : "burger__menu hide"}>
                <ul className='burger__items'>
                    <li className='burger__item'>
                        <Link className='burger__link' to={ComponentPath.ABOUT}>
                            О сайте
                        </Link>
                    </li>
                    <li className='burger__item'>
                        <Link className='burger__link' to={ComponentPath.POSTS}>
                            Посты
                        </Link>
                    </li>
                    <li className='burger__item'>
                        <div onClick={() => auth.signOut()} className='burger__link'>Выход</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MyBurger;
