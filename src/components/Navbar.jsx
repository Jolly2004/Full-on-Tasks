import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      width: "100%",
      height: "82px",
      backgroundColor: "#f4f4f8",
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      boxSizing: "border-box",
      borderTop: "6px solid #9ca3af",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      borderBottom: "1px solid #e5e7eb",
    },

    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    logo: {
      width: "30px",
      height: "30px",
      borderRadius: "8px",
      backgroundColor: "#2563eb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    title: {
      margin: 0,
      color: "#1d4ed8",
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "1",
    },

    subtitle: {
      margin: "4px 0 0",
      color: "#6b7280",
      fontSize: "12px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}>✓</div>

        <div style={styles.textContainer}>
          <h1 style={styles.title}>Task Manager</h1>
          <p style={styles.subtitle}>Organize your day efficiently</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;