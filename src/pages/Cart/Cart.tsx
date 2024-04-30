import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { isProduct } from "../../data/ProductData";
import useCartStore from "../../store/CartStore";
import { ProductForm as Form } from "../../components/ProductCart";
import useAmount from "../../store/AmountCart";
import useTotal from "../../store/PriceTotal";
import formatter from "../../utils/Formatter";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, clearCart] = useCartStore((state) => [
    state.cart,
    state.clearCart,
  ]);
  const { amount } = useAmount();
  const { totalPrice } = useTotal();

  useEffect(() => {}, []);

  const handleBuy = () => {
    navigate("/cart/success");
    clearCart();
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid lg:grid-flow-col gap-14 max-w-6xl mx-auto my-20 p-3 place-items-center justify-center">
          <div className="max-h-[700px] w-[750px]  overflow-y-auto p-2">
            {cart.map((product, idx) =>
              isProduct(product) ? (
                <div
                  key={idx}
                  className="p-4 rounded-md border-t border-gray-200 lg:grid-cols-3 grid grid-cols-1 place-items-center gap-10"
                >
                  <div className="bg-gray-200 h-64 w-64 flex items-center justify-center shadow-md rounded-lg">
                    <img
                      src={product.photo}
                      alt={product.title}
                      className="w-52"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-center max-w-44 first-letter:uppercase">
                      {product.title}
                    </h2>
                  </div>
                  <div>
                    <Form product={product} />
                  </div>
                </div>
              ) : (
                <p key={idx}>Erro ao pega dados do carrinho de compras</p>
              ),
            )}
          </div>
          <div className="bg-gray-200 w-64 h-48 rounded-md gap-1 grid px-2 py-3 place-items-center text-center self-start">
            <h2 className="font-bold text-lg">Detalhes da compra</h2>
            <h3 className="font-semibold text-[16px]">Quantidade: {amount}</h3>
            <h3 className="font-semibold text-[16px]">
              Total: {formatter.format(totalPrice)}
            </h3>
            <div className="w-40 border-b-[1px] border-black mb-2"></div>
            <button
              className="bg-black font-semibold text-white w-36 h-10 rounded-md hover:bg-white hover:text-black hover:border-black hover:border-2 transition ease-in-out"
              onClick={handleBuy}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 max-w-lg rounded-xl mx-auto my-44 p-10 bg-gray-200">
          <div className="flex gap-5">
            <h2 className="text-xl font-bold">
              Ops, parece que seu carrinho está vazio
            </h2>
          </div>
          <Link
            to="/"
            className="flex gap-2 bg-black text-white text-lg text-center font-semibold  py-2 px-4 rounded-xl  border border-black  hover:bg-white hover:text-black hover:border-black hover:border-2 transition ease-in-out"
          >
            Continuar Comprando
            <AiOutlineShoppingCart size={30} />
          </Link>
        </div>
      )}
    </>
  );
}
