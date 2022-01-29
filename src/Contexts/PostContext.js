import React, {createContext, useState, useEffect} from "react"
import { createClient } from "contentful";

// Main configuration
const config = {
    spaceID: process.env.REACT_APP_SPACEID,
    deliveryToken: process.env.REACT_APP_DELIVERYTOKEN
  };
  
  // Create client
  const client = createClient({
    space: config.spaceID,
    accessToken: config.deliveryToken
  });
  
  export const getPosts = () => {
    // Retrieve all entries of a space
    return client.getEntries({
      content_type: "article",
      order: "sys.createdAt"
      // Order entries by date desc
    });
  };

  export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then((res) => setPosts(res.items));
      }, []);
    
      useEffect(() => {
        posts.length && console.log(posts);
      }, [posts]);

  return (
    <PostContext.Provider value={{post: posts}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;