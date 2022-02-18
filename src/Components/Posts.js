import React, { useContext } from 'react';
import { Row } from "antd";
import { PostContext } from "../Contexts/PostContext";
import CardPost from "./CardPost"

const Posts = () => {
    const {post} = useContext(PostContext)
    
  return (
    <main>
    <h1>Posts</h1>
      <Row gutter={[16, 16]}>
        {post.map((p, index) => {
          return (
            <CardPost p={p} key={index}/>
          );
        })
        }
    </Row>
  </main>
  );
};

export default Posts;