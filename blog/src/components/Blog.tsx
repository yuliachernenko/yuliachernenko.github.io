import { useState } from 'react'

import React from "react"; 
//Exercises for lecture №35
const Blog = ({post}) =>{
       return (
        <article className='post'>
            <div className='cover-container'>
              <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-footer'>
              <h3>{post.title} {post.id}</h3>
              <p>{post.content}</p>
            </div>
        </article>
        );
    }


// const Blog = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [posts, setPosts] = useState([]);
//     const dataFetch = async () => {
//         const data = await (
//             await fetch ('https://jsonplaceholder.typicode.com/posts')
//         ).json();
//         setPosts([...posts, data]);
//         console.log(data)
//     }

//     return (

//         <>
//         {
//             isLoading ? (
//                 <div>
//                     <p>Data is loading...</p>
//                     <button onClick={
//                     () => {
//                         dataFetch();
//                         setIsLoading(false)
//                         }
//                     }>Get Data</button>  
//                     </div>
//             )
         
//             :
//             (
//             <div>
//                     <p>Loading complete</p>
//                      {JSON.stringify(posts)}     
//             </div>
//             )
//         }
//         </>
//     )
// }
    



export default Blog 