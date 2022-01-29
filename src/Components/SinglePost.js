import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Button } from "antd";

const Posts = ({articles}) => {
    const {post} = useContext(PostContext)
    const {id} = useParams()


    const thisPost = articles && articles.find((a) => a.fields.title === id)
    // const thisPost = articles && articles.find((a) => a.sys.id === id)
    console.log(thisPost.fields.title)

    
  return (
    <div>
    <h4>{thisPost.fields.teaser}</h4>  
    <h2>Article ID {thisPost.fields.title}</h2>  
    <Link to="/posts/">back to posts</Link>
    </div>
  );
};

export default Posts;
