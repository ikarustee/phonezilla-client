import React, {createContext, useState, useEffect} from "react"
// import { createClient } from "contentful";
import client from "../Components/client"

// // Main configuration
// const config = {
//   spaceID: process.env.REACT_APP_SPACEID,
//   deliveryToken: process.env.REACT_APP_DELIVERYTOKEN
// };

// // Create client
// const client = createClient({
//   space: config.spaceID,
//   accessToken: config.deliveryToken
// });
  
export const getPosts = () => {
  // Retrieve all entries of a space
  return client.getEntries({
    content_type: "article",
    order: "-sys.createdAt"
    // Order entries by date desc
  });
};

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPosts()
        .then((res) => {
          const items = res.items
          const articles = items.map((p) => {
            return{
            ...p,
            teaser: p.fields.teaser,
            title: p.fields.title,
            img: p.fields.postImage.fields.file.url,
            imagecreditURL: p.fields.postImage.fields.description,
            imagecredit: p.fields.postImage.fields.title,
            text: p.fields.postTextcontent,
            id: p.sys.id
            };
          })
          setPosts(articles)
          console.log(articles)
        })
        .catch((error) => console.log(error))
      }, []);
    
      useEffect(() => {
        if(posts.length) return setIsLoading(false);
      }, [posts]);

  return (
    <PostContext.Provider value={{post: posts}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;