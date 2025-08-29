import React from "react";

const Maintenance = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8fafc",
      color: "#222",
      fontFamily: "sans-serif",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
      🚧 Page Under Maintenance 🚧
    </h1>
    <p style={{ fontSize: "1.2rem" }}>
      We're working hard to fix things.
      <br />
      Please check back soon!
    </p>
  </div>
);

export default Maintenance;
