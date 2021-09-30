import React from "react";
import { withRouter } from "react-router";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serialNum: this.props.serial,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const serialNum = target.name;
    this.setState({
      [serialNum]: target.value,
    });
  }

  onClick() {
    if (this.state.serialNum === "12345") {
      this.props.history.push("./Hit");
    } else {
      this.props.history.push("./NotHit");
    }
  }

  render() {
    return (
      <Row className="bg-info pt-5 pb-5 text-center">
        <Col />
        <Col xs={10}>
          <form>
            <div className="text-center pt-2 pb-2">
              <div className="h3">シリアルナンバー入力</div>
              <br />
              <Form.Control
                name="serialNum"
                type="text"
                onChange={this.handleChange}
                value={this.state.serialNum}
              />
            </div>
            <Button
              variant="secondary"
              className="mt-3 pl-5 pr-5"
              size="lg"
              onClick={this.onClick}
            >
              送信する
            </Button>
          </form>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default withRouter(Input);
