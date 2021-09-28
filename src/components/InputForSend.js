import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class InputForSend extends React.Component {
  render() {
    return (
      <Row className="bg-info">
        <Col />
        <Col xs={10} className="bg-light pt-5 pb-2">
          <div className="text-center">
            <div className="h3">おめでとうございます。</div>
            <br />
            <div className="h3">
              プレゼントの宛先を下記入力のうえ送信ボタンをクリックしてください。
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"></Form.Control>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text"></Form.Control>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email"></Form.Control>
              <Form.Label>Tel</Form.Label>
              <Form.Control type="tel"></Form.Control>
            </Form.Group>
            <div className="text-center">
              <Button
                variant="secondary"
                type="submit"
                className="mt-3 pl-5 pr-5"
                size="lg"
              >
                送信する
              </Button>
            </div>
          </Form>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default InputForSend;
