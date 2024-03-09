import React from 'react'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './form.module.css'
import todoLogo from '../../assets/Logo.svg'


const TodoForm = ({onAdd}) => {
    const [text, setText] = useState("")
  return (
    <header className={styles.header}>
      <img src={todoLogo} />

    <form  className={styles.newTaskForm} onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");

    }}>
        <input type='text' value={text} onChange={(e) => {
            setText(e.target.value)
        }}/>
        <button>Create <AiOutlinePlusCircle size={20} /> </button>
    </form>
    </header>
  )
}

export default TodoForm




