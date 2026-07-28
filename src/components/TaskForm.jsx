import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const today = new Date().toISOString().split("T")[0];

const [selectedDate, setSelectedDate] = useState(today);

  const handleSubmit = () => {
    if (!task.trim()) return;

    addTask({
      id: Date.now(),
      text: task,
      completed: false,
      date: selectedDate,
    });

    setTask("");
  };

 const styles = {
  container: {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    fontFamily: "'Inter', sans-serif",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 4px 12px rgba(15,23,42,.08)",
    transition: "all .25s ease",
  },

  heading: {
    margin: "0 0 20px",
    fontWeight: "700",
    fontSize: "32px",
    color: "#111827",
    letterSpacing: "-0.5px",
  },

  inputBox: {
    background: "#f5f8ff",
    border: "1px solid #dbe4ff",
    borderRadius: "14px",
    minHeight: "105px",
    display: "flex",
    alignItems: "flex-start",
    padding: "16px",
    gap: "12px",
  },

  textarea: {
    width: "100%",
    border: "none",
    background: "transparent",
    resize: "none",
    outline: "none",
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#374151",
    fontFamily: "'Inter', sans-serif",
  },

  plus: {
    color: "#2563eb",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "2px",
  },

  button: {
    marginTop: "22px",
    width: "100%",
    height: "50px",
    border: "none",
    borderRadius: "12px",
    background: "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all .25s ease",
    boxShadow: "0 6px 18px rgba(37,99,235,.25)",
  },

  calendar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    flex: 1,
  },

  day: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "600",
    textTransform: "uppercase",
  },

  date: (active, muted) => ({
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: muted ? "default" : "pointer",
    background: active ? "#2563eb" : "transparent",
    color: active ? "#ffffff" : muted ? "#c4c8d0" : "#111827",
    fontWeight: active ? "700" : "500",
    transition: "all .2s ease",
  }),
};

 return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.heading}>Quick Entry</h2>

      <div style={styles.inputBox}>
        <span style={styles.plus}>⊕</span>

        <textarea
          rows="3"
          placeholder="What needs to be done today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.textarea}
        />
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        ＋ Add Task
      </button>
    </div>

    <div style={styles.card}>
      <h2 style={styles.heading}>Schedule</h2>

      <input
        type="date"
        value={selectedDate}
        min={today}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #dbe4ff",
          borderRadius: "12px",
          fontSize: "15px",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          marginTop: "10px",
          boxSizing: "border-box",
        }}
      />

      <p
        style={{
          marginTop: "15px",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        📅 Selected Date: <strong>{selectedDate}</strong>
      </p>
    </div>
  </div>
);
};

export default TaskForm;
