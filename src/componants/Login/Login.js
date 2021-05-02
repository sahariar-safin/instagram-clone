import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { GoogleSignIn } from './Loginmanager';

const Login = () => {

    const [loggingUser, setLoggingUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSetUser = (user) => {
        console.log(user);
        setLoggingUser(user);
        axios.post('http://localhost:5000/adduser', {
            _id: user.email,
            name: user.displayName,
            img: user.photoURL
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        history.replace(from);
    }

    const handleLogin = () => {
        console.log("Click");
        GoogleSignIn()
            .then(data => {
                handleSetUser(data);
            })
    }
    console.log("working ");
    return (
        <div className="container">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
};

export default Login;