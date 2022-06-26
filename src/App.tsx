import { Header } from "./Components/Header";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}></div>
    </div>
  );
}

export default App;
