import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressCards from "./components/ProgressCards";


function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

 const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f6fc",
    padding: "20px",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },

  appContainer: {
    maxWidth: "1500px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0 12px 35px rgba(15,23,42,.12)",
    border: "1px solid #e5e7eb",
  },

  body: {
    display: "flex",
    gap: "24px",
    alignItems: "flex-start",
    padding: "25px",
  },
};

return (
  <div style={styles.page}>
    <div style={styles.appContainer}>
      <Navbar />

      <ProgressCards tasks={tasks} />

      <div style={styles.body}>
        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  </div>
);
}

export default App;