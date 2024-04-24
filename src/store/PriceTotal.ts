import { create } from "zustand";

interface TotalPrice {
  totalPrice: number;
  setTotalPrice: (total: number) => void;
}

const useTotal = create<TotalPrice>((set) => ({
  totalPrice: 0,
  setTotalPrice: (total) => set(() => ({ totalPrice: total })),
}));

export default useTotal;
