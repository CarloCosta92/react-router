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

        <div className='container-fluid'>
            <h1 className='text-center p-4'>Lista dei Post</h1>
            <div className='container row m-auto'>
                {posts.map(post => (

                    <div className="card col-4" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>

                            <p className="card-text">{post.body}</p>

                            <Link to={`/posts/${post.id}`} className="text-decoration-none link-underline-opacity-100-hover">Vai al dettaglio del post</Link>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default PostList;