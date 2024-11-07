

const TaskForm = () => {
  return (
    <form>
      <div>
        <label>Nombre de la Tarea:</label>
        <input type="text" id="name" name="name" value="" />
      </div>
      <div>
        <label>Descripcion:</label>
        <textarea id="description" name="description" value="" />
    </div>
    <div>
        <label>Fecha Limite:</label>
        <input type="date" id="date" name="date" value="" />
    </div>
    <div>
        <label>Prioridad:</label>
        <select id="priority" name="priority" value="">
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
        </select>
    </div>
    <button>Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
