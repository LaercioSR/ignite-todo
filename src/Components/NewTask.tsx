import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <form action="submit">
        <textarea name="task" placeholder="Adicione uma nova tarefa"></textarea>
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
