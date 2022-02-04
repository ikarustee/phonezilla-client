import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "antd";
import { PostContext } from '../Contexts/PostContext';
import Hero from "./Hero"
// import Hero from "../nordwood-themes-q8U1YgBaRQk-unsplash_cropped.jpeg"


const Home = () => {
  const {post} = useContext(PostContext)
  // const {hero} = useContext(HeroContext)
  // const [spliceCount, setSpliceCount] = useState([0,3])
  return (
      <>
      <Hero />
      <main>
      <h1>Welcome to phoneZILLA</h1>
        <Row gutter={[16, 16]}>
          {post.map((p) => {
            return (
              <Col key={p.id} span={8} xs={12} sm={12} md={12} lg={8} xl={8}>
                <Link to={`/posts/${p.title.toLowerCase().split(/[ ']/).join('-')}`}>
                  <Card 
                  className="card__home"
                  key={p.id} 
                  hoverable
                  cover={<img src={p.img} alt="here" width="400" className="card__cover__img"/>}
                  >
                  <span>{p.teaser}</span>
                  <span>{p.title}</span>
                  </Card>
                </Link>
              </Col>
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
