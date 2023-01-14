import React from "react";
import { Text } from "Components/Common";

import "./styles.scss";

export default function CardHeroSection({ icon, label, alt }) {
  return (
    <div className="s-card-hero-section">
      <div className="icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="label">
        <Text size="fz-2">{label}</Text>
      </div>
    </div>
  );
}
