import styles from "./App.module.scss";
import { useEffect } from "react";
import LuckyWheel from "./components/LuckyWheel";
function App() {
  return (
    <div className={styles.App}>
      <LuckyWheel />
    </div>
  );
}

export default App;
