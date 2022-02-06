import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "antd";


const CardPost = ({p}) => {
  const excerpt = Object.values(p.text.content[0].content[0].value)
  // console.log(excerpt)
  // console.log(excerpt.join(''))
  // console.log(excerpt.join('').split(''))

  // console.log(excerpt.join('').substring(0,100))
  // console.log(excerpt)

  // const {hero} = useContext(HeroContext)
  // const [spliceCount, setSpliceCount] = useState([0,3])

  return (
      <Col key={p.id} span={8} xs={12} sm={12} md={12} lg={8} xl={8}>
      <Link to={`/posts/${p.title.toLowerCase().split(/[ ']/).join('-')}`}>
        <Card 
        className="card"
        key={p.id} 
        hoverable
        cover={<img src={p.img} alt="here" width="400" className="card__cover__img"/>}
        >
        <span className="card__body teaser">{p.teaser}</span>
        <span className="card__body title">{p.title}</span>
        <span className="card__body excerpt">{excerpt.join('').split(' ').slice(0,35).join(' ')} ...</span>
        <button className="card__body button" >Read more</button>
        </Card>
      </Link>
    </Col>
  );
};

export default CardPost;
