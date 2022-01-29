import React from 'react';
import { Row, Col } from "antd";

const Home = () => {
  return (
      <>
        <Row>
            <Col span={12}>Hello</Col>
        </Row>
        <Row
        style={{justifyContent: 'center'}}
        >
            <Col xs={12} sm={3} md={2} lg={8} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</Col>
            <Col xs={6} sm={6} md={8} lg={8} >perdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, c</Col>
            <Col xs={6} sm={3} md={2} lg={8} > Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</Col>
        </Row>
      </>
  );
};

export default Home;
