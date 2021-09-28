import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (
      <Row className="bg-info">
        <Col />
        <Col xs={10} className="bg-dark text-white text-center pt-1 pb-1">
          Daiko.Printing.co.ltd,
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Footer;
