import React from 'react'
import { useState } from 'react'
import styles from './footer.module.css'

const TodoFooter = ({todos, onClearCompleted}) => {
    const [] = useState() 

    const completedSize = todos.filter((todo) => todo.isCompleted).length
  return (
    <footer className={styles.footer}>
    <div >
        <span className={styles.textPurple}>{completedSize}/{todos.length} Completed</span>
        <button className={styles.button} onClick={onClearCompleted}>Cleare Completed</button>
    </div>
    </footer>
  )
}

export default TodoFooter