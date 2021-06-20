import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { auth, provider} from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
     
    const [{},dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result) => { 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png" 
                alt="whatsapp_logo"/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
            </div>
            <div className="login__button">
                <Button onClick = {signIn}>
                <div className="text">Sign In With Google &nbsp;</div> 
                <EmailIcon /> 
                </Button>
            </div>
        </div>
    )
}

export default Login;
