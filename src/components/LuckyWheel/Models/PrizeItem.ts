import { ReactNode } from "react";

interface PrizeItem {
  winningRate?: number;
  prizeRender: ReactNode,
  id: string,
  background?: string;
  backgroundGradient?: string;
}

export default PrizeItem;
