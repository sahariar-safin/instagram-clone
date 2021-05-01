import React from 'react';
import { GoogleSignIn } from './Loginmanager';

const Login = () => {

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(user => {
                console.log(user);
            })
    }

    return (
        <div className="container">
            <button onclick={handleGoogleSignIn} className="btn btn-primary">Login</button>
        </div>
    );
};

export default Login;