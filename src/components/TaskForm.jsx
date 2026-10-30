import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') return
    onAddTask(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <button type="submit" aria-label="Add task">+</button>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  )
}

export default TaskForm
