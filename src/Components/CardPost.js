import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "antd";


const CardPost = ({p}) => {

  // const {hero} = useContext(HeroContext)
  // const [spliceCount, setSpliceCount] = useState([0,3])

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
};

export default CardPost;
