import { create } from "zustand";
import { ProductDetails } from "../data/ProductData";

interface CartStore {
  cart: ProductDetails[];
  addToCart: (item: ProductDetails, amount: number) => void;
  removeToCart: (id: number) => void;
  clearCart: () => void;
}

const productCart = localStorage.getItem("cart");
const initialState = {
  cart: productCart ? JSON.parse(productCart) : [],
};

const useCartStore = create<CartStore>((set) => ({
  ...initialState,
  addToCart: (item, amount) =>
    set((state) => {
      const productExist = state.cart.find((product) => product.id === item.id);
      if (productExist) {
        const updatedCart = state.cart.map((product) =>
          product.id === item.id
            ? { ...product, amount: product.amount + amount }
            : product,
        );
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...item, amount }] };
      }
    }),
  removeToCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] }; // Retorna um novo objeto de estado com o carrinho vazio
    }),
}));

export default useCartStore;
