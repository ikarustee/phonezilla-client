import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";
import { readableDate } from "./helper";
import "./SinglePost.css";

const SinglePost = () => {
  const { post } = useContext(PostContext);
  const { id } = useParams();
  let relPost = [];
  const [thisPost, setThisPost] = useState();
  let URL = `http://localhost:8080/posts/${id}`;
  
  useEffect(()=> {
    console.log(id, thisPost)
        if(post && post.find((a) => a.id === id)) {
          setThisPost(post.find((a) => a.id === id))
        } else {
        async function singleFetch() {
          try {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setThisPost(jsonData);
            console.log(jsonData)
          } catch (err) {
            console.log(err)
          }
        } singleFetch()
      }
    }, [id])
  

 if (thisPost?.tags && thisPost.tags.length > 1) {
    let currentPostTags = thisPost.tags
    post.map((p) => {
      p.tags.map((t) => {
        if (
          currentPostTags.includes(t) && !relPost.includes(p.title)
        )
        relPost.push(p);
      }); 
      console.log(new Set(relPost))
    });
    relPost = [...new Set(relPost)]
  }

  
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
            <Link to={`/posts/${p.id}`} key={Math.random() * 20000 +i} className="card__link">
              <li>{p.title}</li>
            </Link>
          ))}
        </div>
        <Link to="/posts/"><button className="backtoposts">back to posts</button></Link>
      </div>
    );
  }
};

export default SinglePost;