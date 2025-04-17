import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Post() {

    let { postId } = useParams();
    postId = parseInt(postId)
    const [post, setPost] = useState(null);
    // variabile del caricamento,serve perchè altrimenti verrebbe caricato prima il render della chiamata api
    const [loading, setLoading] = useState(true);
    // gestione degli errori
    const [error, setError] = useState(null);

    const endpoint = "https://jsonplaceholder.typicode.com/posts/";

    const nextPost = postId + 1
    const prevPost = ((postId - 1) <= 0) ? postId : (postId - 1);

    useEffect(() => {
        setLoading(true);
        axios.get(endpoint + postId)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Could not fetch post: ", error);
                setError(error);
                setLoading(false);
            });
    }, [postId]);

    // blocco di condizioni che mi portano poi al return del post desiderato
    if (loading) {
        return <div>Caricamento</div>;
    }
    //se c'è un errore mostrami div
    if (error) {
        return <div>Errore nel caricamento</div>;
    }
    //se non c'è post mostrami div
    if (!post) {
        return <div>Post non trovato!!!!!</div>;
    }
    // in ultimo mostra risultato
    return (
        <div className='text-center'>
            <h2 className="p-3">{post.title}</h2>
            <p>{post.body}</p>

            <button className='btn btn-primary m-2'><Link to={`/posts/${prevPost}`} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Post precedente</Link></button>

            <button className='btn btn-primary m-2'><Link to={`/posts/${nextPost}`} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Post successivo</Link></button>

            <button className='btn btn-primary m-2'><Link to={`/posts`} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Torna a tutti i post</Link></button>
        </div>
    );
}

export default Post;