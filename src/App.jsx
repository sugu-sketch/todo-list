import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('taskList');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  }, [tasks]);

  const handleEdit = (updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditTask(null); // Clear edit mode after update
  };

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/">Add Task</Link> | <Link to="/tasks">View Tasks</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              setTasks={setTasks}
              editTask={editTask}
              setEditTask={setEditTask}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <TaskList
              tasks={tasks}
              onEdit={setEditTask}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
