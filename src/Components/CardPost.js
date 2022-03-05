import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from "antd";
import ReactMarkdown from 'react-markdown'
const url = "http://localhost:8080/images/"

const CardPost = ({p}) => {
  const excerpt = Object.values(p.text)

  return (
      <Col key={p.id} span={8} xs={12} sm={12} md={12} lg={8} xl={8}>
      <Link to={`/posts/${p.id}`} className="card__link">
        <Card 
        className="card"
        key={p.id} 
        hoverable
        cover={<img src={`${url}/${p.img}`} alt="here" width="400" className="card__cover__img"/>}
        >
        <span className="card__body teaser">{p.teaser}</span>
        <span className="card__body title">{p.title}</span>
        <ReactMarkdown>{excerpt.join('').split(' ').slice(0,25).join(' ') + " ..."}</ReactMarkdown>
        <Button className="card__body button" type="primary">Read more</Button>
        </Card>
      </Link>
    </Col>
  );
};

export default CardPost;
