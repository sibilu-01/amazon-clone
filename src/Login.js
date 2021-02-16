import React,  { useState } from 'react'
import "./Login.css"
import { auth } from "./firebase"
import {Link, useHistory} from "react-router-dom";


function Login() {
    const history = useHistory();
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //succesfully create a new user with email and password
            console.log(auth);
            if(auth ) {
                history.push('/')
            }
        })
        .catch(error => alert (error.message))
    }

    return (
        <div className = 'login'>
            <img className = "login-logo"
            src = 'https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=335&h=155'/>

            <div className = "login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type = "text" value = {email} onChange= {
                        e => setEmail(e.target.value)
                    }/>
                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {
                        e => setPassword(e.target.value)                    
                    }/>

                    <button onClick = { signIn} type = 'submit'
                    className = "login-button">Sign In</button>
                </form>

                <p>
                     By signing -in you agree to the AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, Our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick = {register}
                className = "registerAccount-button"> Create your Amazon Account </button>
            </div>

        </div>
    )
}

export default Login
