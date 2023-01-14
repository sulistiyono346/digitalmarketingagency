import React from "react";
import classname from "classnames";
import "./styless.scss";

export default function H5({ color, weight, children }) {
  const classNames = classname("c-h5", color, weight);
  return <h5 className={classNames}>{children}</h5>;
}
