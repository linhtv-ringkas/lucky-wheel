import { useEffect, useMemo, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import PrizeItem from "../Models/PrizeItem";
//Demo https://codepen.io/WillyIsCoding/pen/KBMRVL

const useWheel = (listReward: PrizeItem[] = [], wheel?: any, config?: any) => {
  const {onSpinStarted, onSpinEnded} = config || {};
  const wheelRef = useRef<HTMLDivElement>(wheel?.wheelRef.current || null);
  const resizeRef = useResizeObserver<HTMLDivElement>({ref: wheelRef});
  const spin = () => {
    if (onSpinStarted && typeof onSpinStarted === 'function') {
      onSpinStarted()
    }
    console.log("quay số nè", wrapWheel.wheelRef.current);
    if (onSpinEnded && typeof onSpinEnded === 'function') {
      onSpinEnded()
    }
  }
  const wrapWheel = useMemo(() => {
    const {width, height} = resizeRef;
    return wheel ?? {
      spin,
      width, height,
      wheelRef: wheelRef,
    }
  }, [wheel, resizeRef])

  return [wrapWheel];
};

export default useWheel;
