import React from "react";
import ButtonBootStrap from "react-bootstrap/Button";

import "./styles.scss";

export default function Button(props) {
  const { children } = props;
  return <ButtonBootStrap {...props}>{children} </ButtonBootStrap>;
}
