import React from 'react';
import { auth } from './firebase/firebaseConfig';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './router/AppRouter';
import './styles/app.scss';
import Navbar from './components/UI/navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyBurger from './components/UI/burger/MyBurger';

const App = () => {

    const [user] = useAuthState(auth);
   
    return (
        <Router>
            {user ? <Navbar/> : null}
            {user ? <MyBurger/> : null}
            <AppRouter/>
        </Router>      
    )
}

export default App;