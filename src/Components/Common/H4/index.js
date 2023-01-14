import React from "react";
import classname from "classnames";
import "./styless.scss";

export default function H4({ color, weight, children }) {
  const classNames = classname("c-h4", color, weight);
  return <h4 className={classNames}>{children}</h4>;
}
