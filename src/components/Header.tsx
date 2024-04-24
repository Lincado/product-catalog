import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";
import useCartStore from "../store/CartStore";
import { isProduct } from "../data/ProductData";

export const Header = () => {
  const { cart } = useCartStore();
  const amount = cart
    .filter(isProduct)
    .reduce((acc, product) => acc + product.amount, 0);
  useEffect(() => {}, [amount]);
  return (
    <>
      <nav className="bg-gray-200 flex w-full my-0 h-16 gap-6 items-center justify-between pl-32 pr-32">
        <div>
          <Link to="/">
            <h1 className="font-bold text-2xl">GoBuy</h1>
          </Link>
        </div>
        <div className=" flex items-center gap-6 ">
          <Link to="/">
            <FaHome size={30} className="text-black" />
          </Link>
          <Link to="/cart">
            <p className="text-[13px] font-bold text-red-500 absolute mx-8 -my-2">
              {amount}
            </p>
            <AiOutlineShoppingCart size={30} className="text-black relative" />
          </Link>
        </div>
      </nav>
    </>
  );
};
