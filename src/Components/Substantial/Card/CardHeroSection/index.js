import React from "react";
import { Text } from "Components/Common";

import "./styles.scss";

export default function CardHeroSection({ Icon, label, alt }) {
  return (
    <div className="s-card-hero-section">
      <div className="icon">
        <Icon />
      </div>
      <div className="label">
        <Text size="fz-2">{label}</Text>
      </div>
    </div>
  );
}
