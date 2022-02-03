import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from "../Contexts/PostContext";
import { Row, Col, Card } from "antd";

const Posts = () => {
    const {post} = useContext(PostContext)
    // console.log(post)
    
  return (
    <main>
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
        }
    </Row>
  </main>
  );
};

export default Posts;

/* Initial code backup 

  <article key={p.id} id={p.id}>
    <h4>{p.teaser}</h4>
    <h2><Link to={`/posts/${p.title.toLowerCase().split(/[ ']/).join('-')}`}>{p.title}</Link></h2>
    <p>{month} {day}, {year}</p>
    <span>
      <img
        src={p.img}
        alt="here"
        width="400"
        className="postimg"
      />
      <a className="imagecredits" href={p.imagecreditURL} target="_blank" rel="noreferrer">©{p.imagecredit}</a>
    </span>
    {documentToReactComponents(p.text)}
    <p>
      <em>
        {p.metadata.tags.map((t, index) => (
          <span key={index} className="tags">{t.sys.id}</span>
        ))}
      </em>
    </p>
    <Button type="default" style={{ marginLeft: 8 }} danger="true">Primary Button</Button>
  </article>


*/
