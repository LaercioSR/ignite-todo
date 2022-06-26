import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  onCreateTask: (task: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTaskText);
    setNewTaskText((state) => "");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText((state) => event.target.value);
  }

  return (
    <div className={styles.newTask}>
      <form action="submit" onSubmit={handleCreateNewTask}>
        <textarea
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
