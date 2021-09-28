import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import visual from "../image/off.png";

class NotHitVisual extends React.Component {
  render() {
    return (
      <Row className="bg-light pt-5 pb-5">
        <Col />
        <Col xs={10} className="p-0 text-center">
          <Image src={visual} alt="visual" fluid></Image>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default NotHitVisual;
