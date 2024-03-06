import styles from './header.module.css'
import todoLogo from '../../assets/Logo.svg'
import { CiCirclePlus } from "react-icons/ci";
import { useState } from 'react';


export function Header ({onAddTask}) {
    const [title, setitle] = useState("")
    function handleSubmit() {
        onAddTask(title)

    }
    return(
        <header className={styles.header}>
            <img src={todoLogo}/>
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder='Add a new task' type='text' value={title} onChange={(e) => setitle(e.target.value)}/>
                <button>
                Create
                <CiCirclePlus size={20}/>
                </button>
            </form>
        </header>
    )
}