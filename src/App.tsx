import { Header } from "./Components/Header";

import styles from "./App.module.css";
import "./global.css";
import { NewTask } from "./Components/NewTask";
import { useState } from "react";
import { ListTasks } from "./Components/ListTasks";
import { Task } from "./interfaces/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(description: string) {
    const task = {
      id: tasks.length + 1,
      description,
      isDone: false,
    };

    setTasks((state) => [...tasks, task]);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onCreateTask={createTask} />
        <ListTasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
