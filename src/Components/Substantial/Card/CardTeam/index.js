import React from "react";
import { Text } from "Components/Common";

import "./styles.scss";

export default function CardTeam({ icon, name, position, alt }) {
  return (
    <div className="s-card-team shadow p-3 mb-5 bg-white rounded">
      <div className="icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="label">
        <Text size="fz-2">{name}</Text>
        <Text size="fz-1" color="secondary">
          <i>{position}</i>
        </Text>
      </div>
    </div>
  );
}
