import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Component
import { H1, Text } from "Components";
// Assets
import { ReactComponent as Chart } from "Assets/Images/seo-section-chart.svg";
import Person from "Assets/Images/seo-section-person.svg";

import "./styles.scss";
import useBreakpoint from "Config/helpers/useBreakpoint";

export default function SeoSection() {
  const breakpoint = useBreakpoint();
  const size = ["xs", "sm", "md", "lg"];
  const isMobile = size.includes(breakpoint);
  return (
    <div className="s-seo-section">
      <Container>
        <Row className="align-items-center">
          <Col className="left-container">
            <div className="chart-ilustration">
              {isMobile ? <></> : <Chart />}
            </div>
            <div className="person-ilustration">
              {isMobile ? (
                <>
                  <img src={Person} alt="person" width="70%" />
                </>
              ) : (
                <img src={Person} alt="person" width="100%" />
              )}
            </div>
          </Col>
          <Col>
            <Text color="secondary" className="mb-3">
              Search Engine Optimization
            </Text>

            <H1 weight={800}>Improve Performance and Growth your Website</H1>
            <Text color="secondary">
              It's a theory of psychology that prioritizes the most fundamental
              human needs (​like air, water, and physical safety) over more
              advanced needs.
            </Text>
            <Text color="primary" className="mt-5">
              Explore Our SEO’s Strategies
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
