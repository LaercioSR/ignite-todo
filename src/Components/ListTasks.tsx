import { Task } from "../interfaces/Task";
import styles from "./ListTasks.module.css";

interface ListTasksProps {
  tasks: Task[];
}

export function ListTasks({ tasks }: ListTasksProps) {
  const totalTasks = tasks.length;
  const totalTasksDone = tasks.reduce((acc, task) => {
    return task.isDone ? acc + 1 : acc;
  }, 0);

  return (
    <div className={styles.listTasks}>
      <div className={styles.headerListTasks}>
        <strong className={styles.tasksCreated}>
          Tarefas criadas{" "}
          <span className={styles.totalTasks}>{totalTasks}</span>
        </strong>
        <strong className={styles.tasksDone}>
          Concluídas{" "}
          <span className={styles.totalTasks}>
            {totalTasks > 0 ? `${totalTasksDone} de ${totalTasks}` : 0}
          </span>
        </strong>
      </div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.description}</li>;
        })}
      </ul>
    </div>
  );
}
