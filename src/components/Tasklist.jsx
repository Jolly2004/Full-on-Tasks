import React, { useState } from "react";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Pending")
      return matchesSearch && !task.completed;

    if (filter === "Completed")
      return matchesSearch && task.completed;

    return matchesSearch;
  });

const styles = {
  container: {
    flex: 1,
    fontFamily: "'Inter', sans-serif",
  },

  searchCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "14px 18px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 12px rgba(15,23,42,.08)",
    marginBottom: "22px",
    gap: "18px",
  },

  search: {
    flex: 1,
    height: "48px",
    border: "none",
    outline: "none",
    borderRadius: "12px",
    background: "#f4f7fc",
    padding: "0 18px",
    fontSize: "15px",
    color: "#374151",
    fontFamily: "'Inter', sans-serif",
  },

  filterBox: {
    display: "flex",
    gap: "10px",
    background: "#f4f7fc",
    padding: "5px",
    borderRadius: "12px",
  },

  filterBtn: (active) => ({
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 18px",
    background: active ? "#ffffff" : "transparent",
    color: active ? "#2563eb" : "#374151",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all .25s ease",
    boxShadow: active
      ? "0 2px 6px rgba(0,0,0,.08)"
      : "none",
  }),

  taskCard: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "22px",
    marginBottom: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(15,23,42,.08)",
    transition: "all .25s ease",
    cursor: "pointer",
  },

  left: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    flex: 1,
  },

  checkbox: {
    width: "22px",
    height: "22px",
    marginTop: "4px",
    accentColor: "#22c55e",
    cursor: "pointer",
  },

  title: (completed) => ({
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: completed ? "#9ca3af" : "#111827",
    textDecoration: completed ? "line-through" : "none",
    transition: ".2s",
  }),

  info: {
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#6b7280",
    fontSize: "14px",
  },

  badge: (type) => ({
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    background:
      type === "HIGH"
        ? "#fee2e2"
        : type === "MEDIUM"
        ? "#ffedd5"
        : "#dcfce7",
    color:
      type === "HIGH"
        ? "#dc2626"
        : type === "MEDIUM"
        ? "#ea580c"
        : "#16a34a",
  }),

  delete: {
    width: "38px",
    height: "38px",
    border: "none",
    borderRadius: "10px",
    background: "#f3f4f6",
    color: "#6b7280",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .2s ease",
  },

  empty: {
    textAlign: "center",
    marginTop: "80px",
    color: "#9ca3af",
    fontSize: "18px",
    fontWeight: "500",
  },
};
  return (
    <div style={styles.container}>
      {/* Search & Filters */}

      <div style={styles.searchCard}>
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <div style={styles.filterBox}>
          {["All", "Pending", "Completed"].map((item) => (
            <button
              key={item}
              style={styles.filterBtn(filter === item)}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks */}

      {filteredTasks.length === 0 ? (
        <p style={styles.empty}>No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            style={styles.taskCard}
            onMouseEnter={() => setHoveredId(task.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={styles.left}>
              <input
                type="checkbox"
                checked={task.completed}
                style={styles.checkbox}
                onChange={() => toggleComplete(task.id)}
              />

              <div>
                <h3 style={styles.title(task.completed)}>
                  {task.text}
                </h3>

                <div style={styles.info}>
                  📅 {task.date}
                </div>
              </div>
            </div>

            {hoveredId === task.id && (
              <button
                style={styles.delete}
                onClick={() => deleteTask(task.id)}
              >
                🗑️
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;