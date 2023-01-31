import React from 'react';
import { auth } from './firebase/firebaseConfig';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './router/AppRouter';
import './styles/app.scss';
import Navbar from './components/UI/navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {

    const [user] = useAuthState(auth);

    return (
       <Router>
            {user ? <Navbar/> : null}
            <AppRouter/>
       </Router>
    )
}

export default App;