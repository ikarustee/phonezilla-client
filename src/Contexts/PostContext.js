import React, { createContext, useState, useEffect } from "react";
import client from "../Components/client";


export const getPosts = () => {
  return client.getEntries({
    content_type: "article",
    order: "-sys.createdAt",
  });
};

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res) => {
        const items = res.items;
        const articles = items.map((p) => {
          return {
            ...p,
            teaser: p.fields.teaser,
            title: p.fields.title,
            img: p.fields.postImage.fields.file.url,
            imagecreditURL: p.fields.postImage.fields.description,
            imagecredit: p.fields.postImage.fields.title,
            text: p.fields.postTextcontent,
            id: p.sys.id,
            date: p.sys.createdAt,
            tags: p.metadata.tags,
          };
        });
        setPosts(articles);
      })
      .catch((error) => console.log(error));
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
