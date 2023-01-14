import React from "react";
import classname from "classnames";
import "./styless.scss";

export default function H1({ color, weight, children }) {
  const classNames = classname("c-h1", color, weight);
  return <h1 className={classNames}>{children}</h1>;
}
