import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Navbar from "./components/NavBarComp";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Works from "./components/Works";

const App = () => {
  return (
    <div id="mainBody">
      <Navbar />
      <Container fluid>
        <Row>
          <Col lg={8} xs={12} sm={12} md={8} xxl={8}>
            {" "}
            <Header />
          </Col>
          <Col lg={4} xs={12} sm={12} md={4} xxl={4}>
            {" "}
            <div class="techStack">
              <Skills />
            </div>
          </Col>
        </Row>{" "}
      </Container>
      <div className="component">
        <Works />
      </div>
    </div>
  );
};

export default App;
