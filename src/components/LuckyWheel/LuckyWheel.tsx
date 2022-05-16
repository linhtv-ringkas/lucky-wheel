import React, { useEffect } from "react";
import cx from "classnames"
import styles from "./style/LuckyWheel.module.scss";
import useWheel from "./hooks/useWheel";

interface IProps {
  className?: string;
}

const LuckyWheel = React.forwardRef<HTMLCanvasElement, IProps>(({className}, ref) => {
  const [wheelRef] = useWheel([1,2,3,4,5,6,7,8,9,10])
  return <div className={cx(styles.container, className)}>
    <div className={styles.wheel}>
      <div ref={wheelRef} className={styles.wheel__inner}>
      </div>
      {/*<div className={styles.wheel__arrow}>*/}
      {/*  <button className={styles.wheel__button}>QUAY</button>*/}
      {/*</div>*/}
    </div>
  </div>
});

export default LuckyWheel;
