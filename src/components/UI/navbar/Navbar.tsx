import React, { FC } from 'react'
import logo from '../../../resurses/logo/Logo Swipenews.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebaseConfig';
import { ComponentPath } from '../../../router';
import './navbar.scss';

const Navbar:FC = () => {

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt="site logo" />
            <div className="navbar__links">
                <Link className='navbar__link' to={ComponentPath.ABOUT}>О сайте</Link>
                <Link className='navbar__link' to={ComponentPath.POSTS}>Посты</Link>
                <div onClick={() => auth.signOut()} className="navbar__logout">Выход</div>
            </div>
        </div>
    )
}

export default Navbar
