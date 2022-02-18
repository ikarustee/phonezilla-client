import React, {useContext} from 'react';
import { Row} from "antd";
import { PostContext } from '../Contexts/PostContext';
import Hero from "./Hero"
import CardPost from "./CardPost"



const Home = () => {
  const {post} = useContext(PostContext)

  return (
      <>
      <Hero />
      <main>
      <h1 className="divider">Welcome to phoneZILLA</h1>
        <Row gutter={[16, 16]}>
          {post.map((p, index) => {
            return (
              <CardPost p={p} key={index}/>
            );
          })
          .splice(0,3)
          }
        </Row>
      </main>
      </>
  );
};

export default Home;
