import React from "react";
import { Text } from "Components/Common";

import "./styles.scss";

export default function CardServices({ icon, label, alt }) {
  return (
    <div className="s-card-services">
      <div className="icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="label">
        <Text>{label}</Text>
      </div>
    </div>
  );
}
