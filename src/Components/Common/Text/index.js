import React from "react";
import classname from "classnames";
import "./styless.scss";

export default function Text({
  color,
  weight = "400",
  children,
  size = "fz-4",
  className,
}) {
  const classNames = classname("c-text", color, weight, size, className);
  return <p className={classNames}>{children}</p>;
}
