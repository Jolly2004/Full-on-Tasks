import React from "react";

const ProgressCards = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const productivity =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const cards = [
    {
      title: "TOTAL TASKS",
      value: total,
      subtitle: `+${pending} today`,
      color: "#2563eb",
      bg: "#eef4ff",
      icon: "📋",
      dark: false,
    },
    {
      title: "COMPLETED",
      value: completed,
      subtitle: `${productivity}% rate`,
      color: "#16a34a",
      bg: "#dcfce7",
      icon: "✅",
      dark: false,
    },
    {
      title: "PENDING",
      value: pending,
      subtitle: pending === 0 ? "All Done!" : "Due soon",
      color: "#c2410c",
      bg: "#ffedd5",
      icon: "📋",
      dark: false,
    },
    {
      title: "PRODUCTIVITY",
      value: `${productivity}%`,
      subtitle: "+5% weekly",
      color: "#ffffff",
      bg: "#2563eb",
      icon: "📈",
      dark: true,
    },
  ];

const styles = {
  container: {
    display: "flex",
    gap: "22px",
    padding: "20px 25px",
    marginBottom: "15px",
    fontFamily: "'Inter', sans-serif",
    flexWrap: "wrap",
    background: "#ffffff",
  },

  card: (dark) => ({
    flex: 1,
    minWidth: "240px",
    minHeight: "150px",
    padding: "22px",
    borderRadius: "18px",
    background: dark ? "#2563eb" : "#ffffff",
    border: dark ? "none" : "1px solid #e5e7eb",
    boxShadow: dark
      ? "0 10px 25px rgba(37,99,235,.25)"
      : "0 4px 12px rgba(15,23,42,.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all .25s ease",
    cursor: "pointer",
  }),

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: (dark) => ({
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: dark ? "#dbeafe" : "#374151",
  }),

  icon: (bg) => ({
    width: "46px",
    height: "46px",
    borderRadius: "12px",
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    boxShadow: "0 3px 8px rgba(0,0,0,.08)",
  }),

  value: (dark) => ({
    margin: "18px 0 4px",
    fontSize: "46px",
    fontWeight: "700",
    lineHeight: 1,
    color: dark ? "#ffffff" : "#0f172a",
  }),

  subtitle: (dark, color) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "600",
    color: dark ? "#dbeafe" : color,
  }),

  progressBg: (dark) => ({
    marginTop: "18px",
    width: "100%",
    height: "5px",
    borderRadius: "999px",
    overflow: "hidden",
    background: dark
      ? "rgba(255,255,255,.25)"
      : "#dbeafe",
  }),

  progress: (percent, color) => ({
    width: `${percent}%`,
    height: "100%",
    background: color,
    borderRadius: "999px",
    transition: "width .4s ease",
  }),
};
  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card(card.dark)}>
          <div style={styles.top}>
            <div style={styles.title(card.dark)}>
              {card.title}
            </div>

            <div style={styles.icon(card.bg)}>
              {card.icon}
            </div>
          </div>

          <div>
            <div style={styles.value(card.dark)}>
              {card.value}
            </div>

            <div style={styles.subtitle(card.dark, card.color)}>
              {card.subtitle}
            </div>

            <div style={styles.progressBg(card.dark)}>
              <div
                style={styles.progress(
                  card.title === "TOTAL TASKS"
                    ? 100
                    : card.title === "COMPLETED"
                    ? productivity
                    : card.title === "PENDING"
                    ? total === 0
                      ? 0
                      : (pending / total) * 100
                    : productivity,
                  card.dark ? "#fff" : card.color
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressCards;