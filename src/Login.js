import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import "./Login.css";


function Login() {
const SignIn = () =>{
    // login hahahaha 
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
};

    return (
        <div className="Login">
            <h2>i am the login page</h2>

            <div className="login_logo">
                <img src="https://cdn.vox-cdn.com/thumbor/NBIcrEIn5T5lLclLrXOcShqZKFQ=/0x0:2400x1600/920x613/filters:focal(1008x608:1392x992):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66509680/discord_logo_wordmark_2400.0.jpg"
                 alt="" 
                 /> 
            </div>

            <Button onClick={SignIn}>Sign in</Button>
        </div>
    );
}

export default Login;
