import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


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
