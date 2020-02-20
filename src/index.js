import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './login/Login'
import Signup from './signup/signup'
import Dashboard from "./dashboard/Dashboard";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

const firebase = require('firebase');
require ('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyBE1YNXsiIYhUeGoq13coD1Ml7_Lc1tzyo",
    authDomain: "chat-app-49973.firebaseapp.com",
    databaseURL: "https://chat-app-49973.firebaseio.com",
    projectId: "chat-app-49973",
    storageBucket: "chat-app-49973.appspot.com",
    messagingSenderId: "232144366516",
    appId: "1:232144366516:web:1acb79adade679a469a0e1",
    measurementId: "G-TEDNF47Y9H"
});

const routing = (
    <Router>
        <div id={'routing-container'}>
            <Route path={'/'} exact component={App}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/signup'} component={Signup}></Route>
            <Route path={'/dashboard'} component={Dashboard}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
