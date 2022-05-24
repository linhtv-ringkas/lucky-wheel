import PrizeItem from "../Models/PrizeItem";
import useWheel from "./useWheel";
//Demo https://codepen.io/WillyIsCoding/pen/KBMRVL

const useWheelInstant = (listReward: PrizeItem[] = [], wheel?: any) => {
  const [wrapWheel] = useWheel(listReward, wheel)
  return [wrapWheel];
};

export default useWheelInstant;
