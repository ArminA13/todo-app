import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import styles from './list.module.css'


const TodoList = ({todos, onChange, onDelete}) => {
  return (
    <div className={styles.task}>
      {
        todos.map((todo) => {
          return(
            <TodoItem 
            key={todo.id} 
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
            />
          )

        })
      }
    </div>
  )
}

export default TodoList