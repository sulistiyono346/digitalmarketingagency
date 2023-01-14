import { H1, Text } from "Components";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function NotFound() {
  return (
    <div className="p-not-found">
      <Container>
        <Row className="align-items-center">
          <Col className="left-container">
            <img
              src={require("../../../Assets/Images/404-page-animation.gif")}
              width="100%"
              alt=""
            />
          </Col>
          <Col>
            <H1 weight={800}>Oops, your force is not strong enough</H1>
            <Text color="secondary">
              This page your requested could not be found.
            </Text>
            <Text color="secondary">May the force be with you!</Text>
            <Link to="/">Go Home</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
