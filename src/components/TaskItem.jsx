function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button
        type="button"
        className="delete-button"
        aria-label="Delete task"
        onClick={() => onDeleteTask(task.id)}
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
