import { useState } from 'react'
import './App.css'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
import TaskCounter from './components/TaskCounter.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: true },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  function handleAddTask(text) {
    const newTask = { id: Date.now(), text: text, completed: false }
    setTasks([...tasks, newTask])
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="container">
      <header>
        <img src={menuIcon} alt="Menu" className="menu-icon" />

        <label className="quick-find">
          <img src={searchIcon} alt="Quick Find" />
          <input type="text" placeholder="Quick Find" />
        </label>

        <TaskCounter total={tasks.length} completed={completedCount} />
      </header>

      <nav>
        <ul>
          <li>
            <img src={inboxIcon} alt="" />
            <span className="label">Inbox</span>
            <span className="count">{tasks.length}</span>
          </li>
          <li>
            <img src={calendarIcon} alt="" />
            <span className="label">Today</span>
            <span className="count">5</span>
          </li>
          <li>
            <img src={upcomingIcon} alt="" />
            <span className="label">Upcoming</span>
          </li>
        </ul>
      </nav>

      <main>
        <section>
          <h1>Inbox</h1>
          <div className="task-filter">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
              All
            </button>
            <span className="separator">|</span>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
              Active
            </button>
            <span className="separator">|</span>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
              Completed
            </button>
          </div>
          <TaskList
            tasks={visibleTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
          <TaskForm onAddTask={handleAddTask} />
        </section>
      </main>
    </div>
  )
}

export default App
