import { Task } from '../task'
import styles from './tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Created tasks</p>
                <span>10</span>
            </div>
            <div>
                <p className={styles.textPurple}>Completed</p>
                <span>2 de 5</span>
            </div>
        </header>
        <div className={styles.list}>
            <Task/>
        </div>
    </section>
  )
}


