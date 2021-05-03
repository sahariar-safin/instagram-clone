import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(function (response) {
                const data = response.data;
                setPosts(data);
                console.log(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <AddPost></AddPost>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Home;