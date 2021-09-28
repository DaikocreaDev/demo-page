import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-light">
              複層ラベル抽選ページ
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav>
              <Link to="/About" className="text-light">
                About
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
