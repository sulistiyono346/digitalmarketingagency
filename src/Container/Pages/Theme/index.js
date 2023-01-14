import { Header } from "Components";
import React from "react";

export default function Theme({ children }) {
  return (
    <div style={{ background: "white" }}>
      <Header />
      {children}
    </div>
  );
}
