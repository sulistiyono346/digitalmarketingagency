import React from "react";
import classname from "classnames";
import "./styless.scss";

export default function H2({ color, weight, children }) {
  const classNames = classname("c-h2", color, weight);
  return <h2 className={classNames}>{children}</h2>;
}
