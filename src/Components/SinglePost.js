import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";


const Posts = ({articles}) => {
    const {post} = useContext(PostContext)
    const {id} = useParams()


    const thisPost = articles && articles.find((a) => a.title.toLowerCase().split(/[ ']/).join('-') === id)
    // const thisPost = articles && articles.find((a) => a.sys.id === id)
    // console.log(thisPost.title)

    
  return (
    <main>
    <h4>{thisPost.teaser}</h4>  
    <h2>Article ID {thisPost.title}</h2>  
    <Link to="/posts/">back to posts</Link>
    </main>
  );
};

export default Posts;
