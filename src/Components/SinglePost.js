import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { readableDate } from "./helper";
import "./SinglePost.css";

const SinglePost = () => {
  const { post } = useContext(PostContext);
  const { id } = useParams();

  const thisPost =
    post &&
    post.find((a) => a.title.toLowerCase().split(/[ ']/).join("-") === id);

  if (thisPost) {
    let myArr = thisPost.tags.map((t) => {
      return t.sys.id;
    });
    console.log(myArr);
    let modArr;
    let relatedPosts = post.map((p) => {
      modArr = p.tags.map((t) => {
        return t.sys.id;
      });
      return modArr;
    });

    console.log("I am a related posts tags::" + relatedPosts);
  }
  // const thisPost = articles && articles.find((a) => a.sys.id === id)
  // console.log(thisPost.title)

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
          <h2>Posts you may like ...</h2>
          {}
        </div>

        <Link to="/posts/">back to posts</Link>
      </div>
    );
  }
};

export default SinglePost;
