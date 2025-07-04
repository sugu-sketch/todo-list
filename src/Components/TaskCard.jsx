function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
    </div>
  );
}

export default TaskCard;
