
import { useState, useEffect } from 'react'

function Post () {

    const [post, setPost] = useState([]);
    const [likes, setLikes] = useState(0);
    const fetchData = async () => {
        const data = await (
            await fetch ('https://my-json-server.typicode.com/yuliachernenko/db/posts/1')
        ).json();
        setPost(data);
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const likeThis = () => {
    setLikes(likes + 1);
    };
    
    useEffect(() => {
    likeThis();
  }, []);


    return (
    <article className='post'>
        <div className='cover-container'>
           <img src={post.cover} alt={post.title} />
           </div>
           <div className='post-footer'>
           <h3>{post.title} {post.id}</h3>
           <p>{post.content}</p>
           <button id='like' onClick={likeThis}>
           Like this post <strong>{likes}</strong>
           </button>
        </div>
    </article> 
        )
    }

export default Post;