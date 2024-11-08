import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, priority });
    setTitle('');
    setDescription('');
    setDate('');
    setPriority('normal');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Agregar Tarea</h2>

      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:border-blue-400"
      />

      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:border-blue-400"
      ></textarea>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:border-blue-400"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
        className="border border-gray-300 rounded-lg w-full p-2 mb-4 bg-white focus:outline-none focus:border-blue-400"
      >
        <option value="low">Baja</option>
        <option value="normal">Normal</option>
        <option value="high">Alta</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Guardar Tarea
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
