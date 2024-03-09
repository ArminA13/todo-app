import React from 'react'
import { TbTrash } from 'react-icons/tb';
import styles from './item.module.css';

const TodoItem = ({todo, onChange, onDelete}) => {
  return (
    <div className={styles.task}>
            <input className={styles.checkContainer} type='checkbox' checked={todo.isCompleted} onChange={(e) => {
                onChange({
                    ...todo,
                    isCompleted: e.target.checked
                })

            }}/>
            <p className={styles.p}>{todo.text}</p>
            
            <button className={styles.deleteButton} onClick={() => {
                onDelete(todo)
            }}><TbTrash size={20} />
            </button>
        
    </div>
  )
}

export default TodoItem