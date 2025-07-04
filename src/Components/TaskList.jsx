import TaskCard from './TaskCard';

function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default TaskList;
