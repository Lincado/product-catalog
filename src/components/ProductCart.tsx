import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { RiSubtractLine } from "react-icons/ri";

import useCartStore from "../store/CartStore";
import { useEffect, useState } from "react";
import { Product, QuantityAmount, schema } from "./SchemaForm";
import useAmount from "../store/AmountCart";
import formatter from "../utils/Formatter";
import useTotal from "../store/PriceTotal";

export const ProductForm: React.FC<Product> = ({ product }) => {
  const { setAmount } = useAmount();
  const { setTotalPrice } = useTotal();
  const [cart, removeToCart] = useCartStore((state) => [
    state.cart,
    state.removeToCart,
  ]);

  const [count, setCount] = useState(product.amount);

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateLocalStorage(newCount);
  };

  const decrease = () => {
    const newCount = count - 1;
    if (count > 1) {
      setCount(newCount);
      updateLocalStorage(newCount);
    }
  };
  const {
    register,
    formState: { errors },
  } = useForm<QuantityAmount>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const updateLocalStorage = (count: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, amount: count };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const newAmount = cart.reduce((acc, product) => acc + product.amount, 0);
    setAmount(newAmount);
    const newTotalPrice = cart.reduce(
      (acc, product) => acc + product.amount * product.price,
      0,
    );
    setTotalPrice(newTotalPrice);

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, setAmount, setTotalPrice]);

  return (
    <>
      <form className="flex flex-col gap-6 items-center">
        <div>
          <h2 className="font-bold font-sans text-md">
            {formatter.format(product.amount * product.price)}
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-200 w-10 flex items-center justify-center "
            onClick={decrease}
          >
            <RiSubtractLine size={20} />
          </button>
          <div className="flex flex-col max-w-72">
            <input
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              focus:outline-none
              text-center h-10 w-10 font-semibold
              border-none"
              type="number"
              {...register("amount")}
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
          <button
            className="bg-gray-200 w-10 flex items-center justify-center"
            onClick={increase}
          >
            <BiPlus size={20} />
          </button>
        </div>
        {errors.amount && (
          <p className="text-red-500 text-[13px]">{errors.amount.message}</p>
        )}
        <button
          className="bg-red-500 p-2 flex  w-52  gap-2 items-center  rounded-lg text-white font-semibold hover:bg-white hover:border-[1px] hover:border-red-500 hover:text-red-500 transition ease-out"
          type="button"
          onClick={() => removeToCart(product.id)}
        >
          Remover do carrinho <AiOutlineShoppingCart size={20} />
        </button>
      </form>
    </>
  );
};
