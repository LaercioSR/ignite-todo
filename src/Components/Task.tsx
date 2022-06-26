import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: number;
  description: string;
  isDone: boolean;
  onDeleteTask: (id: number) => void;
  onMarkTask: (id: number) => void;
}

export function Task({
  id,
  description,
  isDone,
  onDeleteTask,
  onMarkTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }
  function handleMarkTask(event: ChangeEvent) {
    onMarkTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.checkboxDone}>
        <input type="checkbox" checked={isDone} onChange={handleMarkTask} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={isDone ? styles.taskDone : ""}>{description}</p>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}
