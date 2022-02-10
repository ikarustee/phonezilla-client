import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const Posts = () => {
    const {post} = useContext(PostContext)
    const {id} = useParams()
    const [postURL, setPostURL] = useState()

    let location = useLocation();
    console.log(location.pathname)

    let thisPost = post && post.find((a) => a.title.toLowerCase().split(/[ ']/).join('-') === id)

    const date = new Date(thisPost.date)
    date.toISOString().substring(0, 10);

    let month = date.toLocaleString("en-EN", { month: "long" });
    let day = date.getDate();
    let year = date.getFullYear();

    useEffect(() => {
      setPostURL(location.pathname)
    },[location])

    if(!thisPost) {
      return "Loading ..."
    } else {
      return (
        <main>
        <h4>{thisPost.teaser}</h4>  
        <h2>Article ID {thisPost.title}</h2>
        <p>{month} {day}, {year}</p>  
        <Link to="/posts/">back to posts</Link>
        </main>
      )};
};

export default Posts;
