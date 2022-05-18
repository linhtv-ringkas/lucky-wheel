import styles from "./App.module.scss";
import { ReactNode, useEffect } from "react";
import LuckyWheel from "./components/LuckyWheel";
import PrizeItem from "./components/LuckyWheel/Models/PrizeItem";
function App() {

  const prizes: PrizeItem[]=[
    {
      prizeRender: <div className={styles.prizeItem}>1</div>,
      id: "1",
      background: "red",
    },
    {
      prizeRender: <div className={styles.prizeItem}>2</div>,
      id: "2",
      background: "yellow",
    },
    {
      prizeRender: <div className={styles.prizeItem}>3</div>,
      id: "3",
      background: "blue",
    },
    {
      prizeRender: <div className={styles.prizeItem}>4</div>,
      id: "4",
      background: "pink",
    },
    {
      prizeRender: <div className={styles.prizeItem}>5</div>,
      id: "5",
      background: "brown",
    },
    {
      prizeRender: <div className={styles.prizeItem}>6</div>,
      id: "6",
      background: "green",
    },
  ]
  return (
    <div className={styles.App}>
      <LuckyWheel prizes={prizes} />
    </div>
  );
}

export default App;
