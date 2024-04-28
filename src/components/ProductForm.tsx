import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { RiSubtractLine } from "react-icons/ri";

import useCartStore from "../store/CartStore";
import { useState } from "react";
import { Product, QuantityAmount, schema } from "./SchemaForm";

export const ProductForm: React.FC<Product> = ({ product }) => {
  const [showMessage, setShowMessage] = useState(false);

  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount((count) => count - 1);
  };
  console.log("antes", cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuantityAmount>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const handleSubmitQuantity = () => {
    addToCart(product, count);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleSubmitQuantity)}
      >
        <div className="flex">
          <button
            className="bg-gray-200 w-10 flex items-center justify-center"
            type="button"
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
            type="button"
            onClick={increase}
          >
            <BiPlus size={20} />
          </button>
        </div>
        {errors.amount && (
          <p className="text-red-500 text-[13px]">{errors.amount.message}</p>
        )}
        <button
          className="bg-green-500 p-2 flex  w-52  gap-2 items-center  rounded-lg text-white font-semibold  hover:bg-white hover:border-[1px] hover:border-green-500 hover:text-green-500 transition ease-out"
          type="submit"
        >
          Adicionar ao carrinho <AiOutlineShoppingCart size={20} />
        </button>
        {showMessage && (
          <p className="text-green-500 text-sm font-semibold">
            Produto adicionado ao carrinho
          </p>
        )}
      </form>
    </>
  );
};
