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
      textAlign: "center",
      padding: "1.5rem",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
      Page Under Maintenance
    </h1>
    <p style={{ fontSize: "1.2rem", maxWidth: "32rem", lineHeight: 1.6 }}>
      We are working hard to improve the experience.
      <br />
      Please check back soon.
    </p>
  </div>
);

export default Maintenance;
