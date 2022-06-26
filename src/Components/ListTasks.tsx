import { Task } from "../interfaces/Task";
import styles from "./ListTasks.module.css";

interface ListTasksProps {
  tasks: Task[];
}

export function ListTasks({ tasks }: ListTasksProps) {
  return (
    <div className={styles.listTasks}>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.description}</li>;
        })}
      </ul>
    </div>
  );
}
