import React from 'react'
import { Header } from './components/header'
import { Tasks } from './components/tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTask] =useState([]);

  function addTasks(taskTitle) {
    setTask([
      ...tasks,
      {
        id: Math.random(),
        title: taskTitle,
        isCompleted: false 
      }
    ])
  }

  return (
    <div>
      <Header onAddTask={addTasks}/>
      <Tasks/>
    </div>

  )
}

export default App
