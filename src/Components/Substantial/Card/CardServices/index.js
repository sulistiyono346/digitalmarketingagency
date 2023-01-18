import React from "react";
import { Text } from "Components/Common";

import "./styles.scss";

export default function CardServices({ Icon, label, alt }) {
  return (
    <div className="s-card-services">
      <div className="icon">
        <Icon />
      </div>
      <div className="label">
        <Text>{label}</Text>
      </div>
    </div>
  );
}
