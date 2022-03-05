import React, { createContext, useState, useEffect } from "react";
// import client from "../Components/client";


// export const getPosts = () => {
//   return client.getEntries({
//     content_type: "article",
//     order: "-sys.createdAt",
//   });
// };

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = "http://localhost:8080/posts/"

  async function getPosts() {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      const articles = jsonData.map((p) => {
        return {
          ...p,
          id:p._id,
          teaser: p.teaser,
          title: p.title,
          img: p.img,
          imagecredit: p.title,
          text: p.text,
          date: p.createdAt,
          tags: p.tags
        };
      });
      setPosts(articles);
  } catch (e) {
      console.error(e);
  } 
} 
    useEffect(() => {
      getPosts();
    }, []);

  useEffect(() => {
    if (posts.length) return setIsLoading(false);
  }, [posts]);

  return (
    <PostContext.Provider value={{ post: posts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
