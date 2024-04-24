import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 max-w-xl h-80 mx-auto my-20 px-3 py-8 text-green-500 bg-gray-200 rounded-3xl">
        <FaCheck size={100} />
        <h2 className="text-3xl font-semibold">Compra finalizada</h2>
        <Link
          to="/"
          className="flex gap-2 bg-green-500 text-white text-lg text-center font-semibold  py-2 px-4 rounded-xl hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 transition ease-in-out"
        >
          Continuar Comprando
          <AiOutlineShoppingCart size={30} />
        </Link>
      </div>
    </>
  );
}
