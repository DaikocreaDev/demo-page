import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import visual from "../image/visual.jpg";

class TopVisual extends React.Component {
  render() {
    return (
      <Row className="bg-info">
        <Col />
        <Col xs={10} className="p-0 text-center">
          <Image src={visual} alt="visual" fluid></Image>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default TopVisual;
