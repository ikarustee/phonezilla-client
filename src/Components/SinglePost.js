import {useContext} from "react"
import {Link, useParams} from "react-router-dom"
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { readableDate } from "./helper";

const Posts = () => {
  const { post } = useContext(PostContext);
  const { id } = useParams();

  const thisPost =
    post &&
    post.find((a) => a.title.toLowerCase().split(/[ ']/).join("-") === id);
  // const thisPost = articles && articles.find((a) => a.sys.id === id)
  // console.log(thisPost.title)

  if(!thisPost) {
    return "Loading ..."
  } else {

  return (
    <>
      <div className="singlepost">
        <h2 className="singlepost_title">{thisPost.title}</h2>
        <small className="singlepost_date">{readableDate(thisPost.date)}</small>
        <img
          className="singlepost_img"
          src={thisPost.img}
          alt={thisPost.title}
        />
      </div>

      <div className="singlepost_body">
        <p className="singlepost_desc">{thisPost.description}</p>
      </div>

      <div className="moreposts">
        WRITE LOGIC TO GET SIMILAR POSTS OR RANDOM POSTS
      </div>
      {/* Previous written by TANJA */}
      <h2>Article ID {thisPost.title}</h2>

      <h4>{thisPost.teaser}</h4>

      <Link to="/posts/">back to posts</Link>
    </>
  );}
};

export default Posts;
