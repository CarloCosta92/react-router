import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostList() {

    //variabile per salvare i post
    const [posts, setPosts] = useState([]);

    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    //chiamata axios
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setPosts(response.data);
            })
    }, []);


    return (
        <div>
            <h1>Lista dei Post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;