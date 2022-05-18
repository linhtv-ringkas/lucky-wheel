import React, { useCallback, useMemo } from "react";
import cx from "classnames"
import styles from "./style/LuckyWheel.module.scss";
import PrizeItem from "./Models/PrizeItem";

interface IProps {
  className?: string;
  prizes?: PrizeItem[];
  borderColor?: string;
  borderSize?: string;
}
function getTanFromDegrees(degrees: number) {
  return Math.tan(degrees * Math.PI / 180);
}

const LuckyWheel = React.forwardRef<HTMLCanvasElement, IProps>(({className, prizes=[]}, ref) => {
  // const [wheelRef] = useWheel(list);

  const wheelStyle = useMemo(()=> {
    return {
      '--nb-item': prizes?.length || 0,
      '--selected-item': 0,
    } as React.CSSProperties;
  }, [prizes])
  const wheelItemStyle = useCallback((prizeIndex: number)=> {
        return {
      '--item-nb': prizeIndex,
      '--neutral-color': prizes[prizeIndex].background,
      '--slice-width': Math.round(400* getTanFromDegrees(360/prizes.length/2)) + "px",
      '--item-zIndex': -1,
    } as React.CSSProperties;
  }, [prizes])
  return <div className={cx(styles.container, className)}>
    <div className={styles.wheel} style={wheelStyle}>
      {prizes?.map((item, index) => (
        <div className={styles["wheel-item"]} key={index} style={wheelItemStyle(index)}>
          {item.prizeRender}
        </div>
      ))}
    </div>
  </div>
});

export default LuckyWheel;
