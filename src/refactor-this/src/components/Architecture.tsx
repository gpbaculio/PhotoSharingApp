import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Architecture = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ order: "last" }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: "first" }}>Third, but first</Col>
      </Row>
    </Container>
  );
};

export default Architecture;
