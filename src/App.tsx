import styles from "./App.module.scss";
import { useEffect } from "react";
import LuckyWheel from "./components/LuckyWheel";
import PrizeItem from "./components/LuckyWheel/Models/PrizeItem";
import useWheelInstant from "./components/LuckyWheel/hooks/useWheelInstant";

function App() {

  const prizes: PrizeItem[] = [
    {
      prizeRender: <div className={styles.prizeItem}>1</div>,
      id: "1",
      background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
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
      background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
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
  const [wheel] = useWheelInstant(prizes);
  useEffect(() => {
    setTimeout(() => {
      wheel.spin();
    }, 2000)
  }, [])
  return (
    <div className={styles.App}>
      <LuckyWheel
        onSpinStarted={() => console.log("started")}
        onSpinEnded={() => console.log("ended")}
        wheel={wheel}
        prizes={prizes}
      />
    </div>
  );
}

export default App;
