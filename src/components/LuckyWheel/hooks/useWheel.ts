import { useEffect, useRef } from "react";
//Demo https://codepen.io/WillyIsCoding/pen/KBMRVL

function getTanFromDegrees(degrees: number) {
  return Math.tan(degrees * Math.PI / 180);
}
const useWheel = (listReward: any[] = []) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divBounding = wheelRef?.current?.getBoundingClientRect();
    const radius = (divBounding?.width ?? 0) / 2;
    const count = listReward?.length > 0 ? listReward.length : 1;
    const spiceDegrees = (2 * Math.PI) / count;

    if (listReward?.length) {
      if (wheelRef.current) {
        var first = wheelRef.current.firstElementChild;
        while (first) {
          first.remove();
          first = wheelRef.current.firstElementChild;
        }
      }
      listReward.forEach((i, index) => {
        const divEle = document.createElement("div");
        const x = radius * getTanFromDegrees(360/listReward.length/2)
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divEle.classList.add("wheel__sec");
        divEle.classList.add("wheel__sec__" + (index + 1));
        divEle.style.borderWidth = `${radius}px ${x}px 0`;
        divEle.style.borderTopColor = "#"+ randomColor;
        divEle.style.left = `${radius - x}px`;
        // divEle.style.left = `0`;
        divEle.style.transform=`rotate(${360/listReward.length*index}deg)`
        index === 5 && wheelRef.current?.appendChild(divEle);
      });
    }
  }, [listReward]);

  return [wheelRef];
};

export default useWheel;
