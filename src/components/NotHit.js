import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopVisual from "../components/TopVisual";
import NotHitVisual from "../components/NotHitVisual";
import Button from "react-bootstrap/Button";

class NotHit extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push("./");
  }

  render() {
    return (
      <Container fluid>
        <TopVisual />
        <Row className="bg-info">
          <Col />
          <Col xs={10} className="bg-dark pt-2 pb-2">
            <div className="h3 text-light text-center">抽選結果</div>
          </Col>
          <Col />
        </Row>
        <NotHitVisual />
        <Row className="bg-info">
          <Col />
          <Col xs={10} className="bg-light pb-2 pt-3 text-center">
            <Button
              className="mt-5 pl-5 pr-5"
              variant="secondary"
              size="lg"
              onClick={this.onClick}
            >
              別の番号で再挑戦
            </Button>
            <br />
            <Button
              className="mt-4 mb-4 pl-5 pr-5"
              variant="secondary"
              size="lg"
              onClick={this.onClick}
            >
              抽選トップへ戻る
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default NotHit;
