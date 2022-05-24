import React, { useCallback, useMemo } from "react";
import cx from "classnames"
import styles from "./style/LuckyWheel.module.scss";
import PrizeItem from "./Models/PrizeItem";
import useWheel from "./hooks/useWheel";
import { isColor } from "./utils";

interface IProps {
  className?: string;
  prizes?: PrizeItem[];
  borderColor?: string;
  borderSize?: string;
  wheel?: any;
  onSpinStarted?: () => void;
  onSpinEnded?: () => void;
}

function getTanFromDegrees(degrees: number) {
  return Math.tan(degrees * Math.PI / 180);
}

const LuckyWheel = React.forwardRef<HTMLDivElement, IProps>(({
  className,
  prizes = [],
  wheel,
  borderSize,
  onSpinEnded,
  onSpinStarted
}, ref) => {
  const [wrapWheel] = useWheel(prizes, wheel, {onSpinStarted, onSpinEnded});
  const wheelStyle = useMemo(() => {
    return {
      '--wheel-size': wrapWheel.width + "px",
      '--nb-item': prizes?.length || 0,
      '--wheel-border-size': borderSize || '10px'
    } as React.CSSProperties;
  }, [ wrapWheel.width, prizes?.length, borderSize])
  const wheelItemStyle = useCallback((prizeIndex: number) => {
    return {
      '--item-nb': prizeIndex,
      '--neutral-color': prizes[prizeIndex].background,
      '--slice-width': Math.round((wrapWheel?.width || 0) * getTanFromDegrees(360 / prizes.length / 2)) + "px",
      '--item-zIndex': -1,
    } as React.CSSProperties;
  }, [prizes, wrapWheel?.width])
  return <div className={cx(styles.container, className)}>
    <div ref={wrapWheel.wheelRef} className={styles.wheel} style={wheelStyle}>
      {prizes?.map((item, index) => (
        <div className={cx(styles["wheel-item"], isColor(item.background) ? styles["bg-color"] : styles["bg-gradient"])} key={index} style={wheelItemStyle(index)}>
          {item.prizeRender}
        </div>
      ))}
    </div>
  </div>
});

export default LuckyWheel;
