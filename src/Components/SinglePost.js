import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";
import { readableDate } from "./helper";
import "./SinglePost.css";

const SinglePost = () => {
  const { post } = useContext(PostContext);
  const { id } = useParams();
  let relPost = [];
  const [thisPost, setThisPost] = useState(post && post.find((a) => a.id === id));
  
  if(!thisPost){
    async function singleFetch() {
      try {
        const response = await fetch("http://localhost:8080/posts/" + id);
        const jsonData = await response.json();
        setThisPost(jsonData);
        console.log(jsonData)
      } catch (err) {
        console.log(err)
      }
  } singleFetch()
}

  /* // async function functionName() {
      try {

      } catch {
        
      }
  } */
 /*  if (thisPost) {
    let currentPostTags = thisPost.tags.map((t) => {
      return t;
    }); */
/* 
    let relatedPosts = post.map((p) => {
      p.tags.map((t) => {
        if (
          currentPostTags.includes(t.sys.id) &&
          !relPost.includes(p.title)
        )
          relPost.push(p.title);

      });
    });

  }
 */

  if (!thisPost) {
    return "Loading ...";
  } else {
    return (
      <div className="singlepostwrapper">
        <div className="singlepost">
          <h1 className="singlepost_title">{thisPost.title}</h1>
          <small className="singlepost_date">
            {readableDate(thisPost.date)}
          </small>
          <img
            className="singlepost_img"
            src={thisPost.img}
            alt={thisPost.title}
          />
          <div className="singlepost_body">
            {thisPost.text}
          </div>
        </div>

        <div className="moreposts">
          <h4>Posts you may like ...</h4>
          {relPost.map((p, i) => (
            <Link to={`/posts/${p.toLowerCase().split(/[ ']/).join('-')}`} className="card__link">
            <li key={Math.random() * 20000}>{p}</li>
            </Link>
          ))}
        </div>

        <Link to="/posts/"><button className="backtoposts">back to posts</button></Link>
      </div>
    );
  }
};

export default SinglePost;
