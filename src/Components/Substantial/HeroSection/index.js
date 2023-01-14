import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

// Component
import { Button, H1, H5, Text, CardHeroSection } from "Components";
// Assets
// import { ReactComponent as Arrow } from "Assets/Images/arrow.svg";
import socialMedia from "Assets/Images/digixine-social-media-organize.svg";
// import HeroSectionBg from "Assets/Images/hero-section-bg.png";

import "./styles.scss";

export default function HeroSection() {
  const services = [
    {
      icon: socialMedia,
      label: "Social Media Organize",
      alt: "social-media",
    },
    {
      icon: socialMedia,
      label: "UI & UX Design",
      alt: "ui-ux",
    },
    {
      icon: socialMedia,
      label: "Search Engine Optimization",
      alt: "seo",
    },
    {
      icon: socialMedia,
      label: "Google Ads Optimization",
      alt: "google-ads-optimization",
    },
  ];
  return (
    <div className="s-hero-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <H5 color="primary" weight={400}>
              PT. Digital Media Nusantara
            </H5>
            <H1 weight={800}>Digital Marketing Agency</H1>
            <Text color="secondary">
              We examine the top of funnel to figure out how to make people to a
              subscribe newsletter then turn prospects into leads.
            </Text>
            <Stack direction="horizontal" gap={5} className="button-container">
              <Button>Contact us</Button>
              <Button variant="outline-primary">Our pricing</Button>
            </Stack>
          </Col>
          <Col xs={12} md={6}>
            <div className="hero-section-bg">
              {services.map((val, key) => (
                <CardHeroSection
                  key={key}
                  icon={val.icon}
                  label={val.label}
                  alt={val.alt}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
