import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { readableDate } from "./helper";
import "./SinglePost.css";

const SinglePost = () => {
  const { post } = useContext(PostContext);
  const { id } = useParams();
  let relPost = [];
  const thisPost =
    post &&
    post.find((a) => a.title.toLowerCase().split(/[ ']/).join("-") === id);

  if (thisPost) {
    let currentPostTags = thisPost.tags.map((t) => {
      return t.sys.id;
    });

    let relatedPosts = post.map((p) => {
      p.tags.map((t) => {
        if (
          currentPostTags.includes(t.sys.id) &&
          !relPost.includes(p.fields.title)
        )
          relPost.push(p.fields.title);

      });
    });

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
            {documentToReactComponents(thisPost.text)}
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
