
import { useState, useEffect, useContext, createContext } from 'react'
import { PostContext } from "./PostContext";
import Layout from "./Layout";



function Post () {

    const [post, setPost] = useState([]);
    const fetchData = async () => {
        const data = await (
            await fetch ('https://my-json-server.typicode.com/yuliachernenko/db/posts/1')
        ).json();
        setPost(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
      <PostContext.Provider value={post}>
          <Layout>
          </Layout>
      </PostContext.Provider>
    );

    }

export default Post;


