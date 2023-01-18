import React from "react";
import { H1, Text } from "Components";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gif from "Assets/Images/404-page-animation.gif";
import "./styles.scss";

export default function NotFound() {
  return (
    <div className="p-not-found">
      <Container>
        <Row className="align-items-center">
          <Col className="left-container">
            <img src={gif} width="100%" alt="" />
          </Col>
          <Col>
            <H1 weight="bold">Oops, your force is not strong enough</H1>
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
