import "./App.css";
import "../src/fonts/fonts.css"
import { useContext } from "react";
import Posts from "./Components/Posts"
import { Routes, Route } from 'react-router-dom';
import { PostContext } from "./Contexts/PostContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SinglePost from "./Components/SinglePost"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

export default function App() {
  const {post} = useContext(PostContext)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/posts/" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<SinglePost key={post.map((p) => p.id)}/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    <Footer />
    </div>
  );
}
