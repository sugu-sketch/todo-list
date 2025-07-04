import TaskForm from './TaskForm';

function Home({ tasks, setTasks, editTask, setEditTask, onEdit }) {
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{editTask ? 'Edit Task' : 'Add New Task'}</h2>
      <TaskForm
        onAdd={addTask}
        editTask={editTask}
        onEdit={onEdit}
        clearEdit={() => setEditTask(null)}
      />
    </div>
  );
}

export default Home;
