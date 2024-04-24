import { create } from "zustand";

interface Amount {
  amount: number;
  setAmount: (newAmount: number) => void;
}

const useAmount = create<Amount>((set) => ({
  amount: 1,
  setAmount: (newAmount) => set(() => ({ amount: newAmount })),
}));

export default useAmount;
