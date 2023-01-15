import React from "react";
import { ReactComponent as Burberry } from "Assets/Images/sponsor-burberry.svg";
import { ReactComponent as Chanel } from "Assets/Images/sponsor-chanel.svg";
import { ReactComponent as Esprit } from "Assets/Images/sponsor-esprit.svg";
import { ReactComponent as Groupe } from "Assets/Images/sponsor-groupe.svg";
import "./styles.scss";
import { Container, Stack } from "react-bootstrap";
import useBreakpoint from "Config/Helpers/useBreakpoint";

export default function SponsorAndBrand() {
  const breakpoint = useBreakpoint();

  const size = ["xs", "sm", "md", "lg"];
  const isMobile = size.includes(breakpoint);
  return (
    <Container className="s-sponsor-brand justify-content-center align-items-center">
      <Stack
        direction={isMobile ? "vertical" : "horizontal"}
        gap={5}
        className="align-items-center"
      >
        <Groupe></Groupe>
        <Esprit></Esprit>
        <Burberry></Burberry>
        <Chanel></Chanel>
      </Stack>
    </Container>
  );
}
