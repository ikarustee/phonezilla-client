import "./App.css";
import { useState, useEffect, useContext } from "react";
import Posts from "./Components/Posts"
import { Routes, Route } from 'react-router-dom';
import { PostContext } from "./Contexts/PostContext";

/*
        const date = new Date(p.sys.createdAt)
        date.toISOString().substring(0, 10);
*/

// let time = new Date("2010-01-13T18:31:16Z");
// let month = time.toLocaleString("en-EN", { month: "long" });
// console.log(month)

export default function App() {
  const {post} = useContext(PostContext)
  // const [posts, setPosts] = useState([]);

  // const {post} = useContext(PostContext)

  // useEffect(() => {
  //   getArticles().then((res) => setPosts(res.items));
  // }, []);

  // useEffect(() => {
  //   posts.length && console.log(posts);
  // }, [posts]);
  return (
    <div className="App">
      <h2>Hello world.</h2>
      <Routes>
        <Route path="/posts/" element={<Posts />}></Route>
        {/* <Route path="/posts/:id" element={<SinglePost key={post.sys.id} />}></Route> */}
      </Routes>
    </div>
  );
}
