import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import smartContract from "../assets/smart.png";
import "../style/works.css";

const Works = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} xs={12} sm={12} md={6} xxl={6}>
            {" "}
            <div className="workImageContainer">
              <img class="workImage" src={smartContract} alt="" />
            </div>
          </Col>
          <Col lg={6} xs={12} sm={12} md={6} xxl={6}>
            {" "}
            <div className="description">
              <h2 class="text">Web3 app</h2>
              <p className="text">
                A smart contract made with ReactJS and Solidity
              </p>
              <p className="text">
                In order to connect to the app, you need a crypto wallet (like
                Metamask)
              </p>
              <p className="text">
                After connecting, you can write a message and wave
              </p>
              <p className="text">
                It's deployed on the rinkeby network, so it doesn't cost real
                money to interact with
              </p>
            </div>
          </Col>
        </Row>{" "}
      </Container>
    </div>
  );
};

export default Works;
