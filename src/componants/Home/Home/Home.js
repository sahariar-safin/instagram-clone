import React from 'react';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    );
};

export default Home;