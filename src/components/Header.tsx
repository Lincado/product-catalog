import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
export const Header = () => {
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
            <AiOutlineShoppingCart size={30} className="text-black" />
          </Link>
        </div>
      </nav>
    </>
  );
};
