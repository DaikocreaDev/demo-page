import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import TopVisual from "./TopVisual";
import LotteryGif from "../image/lottery.gif";

class Lottery extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.location.state.inputSerialNum === "12345") {
        this.props.history.push("./Hit");
      } else {
        this.props.history.push("./NotHit");
      }
    }, 3 * 1000);
  }

  render() {
    return (
      <Container fluid>
        <TopVisual />
        <Row className="bg-info">
          <Col />
          <Col xs={10} className="bg-dark pt-2 pb-2">
            <div className="h3 text-light text-center">抽選</div>
          </Col>
          <Col />
        </Row>
        <Row className="m-5 bg-light">
          <Col />
          <Col xs={10} className="text-center pt-2 pb-2">
            <Image src={LotteryGif} alt="lottery" fluid></Image>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Lottery;
