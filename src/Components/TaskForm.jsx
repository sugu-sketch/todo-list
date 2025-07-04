import { useState, useEffect } from 'react';

function TaskForm({ onAdd, onEdit, editTask, clearEdit }) {
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    if (editTask) {
      setForm({ title: editTask.title, description: editTask.description });
    }
  }, [editTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      if (editTask) {
        onEdit({ ...form, id: editTask.id });
      } else {
        onAdd({ ...form, id: Date.now() });
      }
      setForm({ title: '', description: '' });
      clearEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
