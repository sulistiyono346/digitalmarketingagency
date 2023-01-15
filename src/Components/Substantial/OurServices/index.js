import React from "react";
import { Container } from "react-bootstrap";
import { CardServices, H4, Text } from "Components";
import feed from "Assets/Images/our-services-feed.svg";
import instagram from "Assets/Images/our-services-instagram.svg";
import monday from "Assets/Images/our-services-monday.svg";
import pen from "Assets/Images/our-services-pen.svg";
import list from "Assets/Images/our-services-play-list.svg";

import "./styles.scss";

export default function OurServices() {
  const services = [
    {
      icon: list,
      label: "Search Engine Optimization",
      alt: "seo",
    },
    {
      icon: instagram,
      label: "Social Media Optimization",
      alt: "social-media",
    },
    {
      icon: pen,
      label: "UX Writer",
      alt: "writer",
    },
    {
      icon: feed,
      label: "Content Management",
      alt: "social-media",
    },
    {
      icon: monday,
      label: "Ads Optimization",
      alt: "ads",
    },
  ];
  return (
    <Container className="s-our-services justify-content-center align-items-center">
      <H4 weight={700}>Our Services</H4>
      <Text color="secondary" className="text-center">
        Increase your linkability, make tagging and bookmarking easy. Reward
        inbound links
      </Text>
      <div className="card-container">
        {services.map((val, key) => (
          <CardServices
            key={key}
            icon={val.icon}
            label={val.label}
            alt={val.alt}
          />
        ))}
      </div>
    </Container>
  );
}
