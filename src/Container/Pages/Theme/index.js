import React from "react";
import { Header } from "Components";

export default function Theme({ children }) {
  return (
    <div style={{ background: "white" }}>
      <Header />
      {children}
    </div>
  );
}
