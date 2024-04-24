import { Link } from "react-router-dom";
import { productsData, isProduct } from "../../data/ProductData";
import formatter from "../../utils/Formatter";
export default function Home() {
  return (
    <>
      <div className="container flex flex-wrap justify-between mx-auto mt-28 gap-14 pt-8 pb-16 ">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 max-w-72 w-64 max-h-96 h-80 p-4 rounded-md shadow-md flex flex-col items-center hover:scale-105 transition-all ease-in-out"
          >
            {isProduct(product) ? (
              <Link to={`/product/${product.id}`}>
                <div className="flex flex-col items-center justify-between h-72">
                  <img
                    src={product.photo}
                    alt={product.title}
                    className="max-w-52"
                  />
                  <h2 className="font-semibold first-letter:uppercase">
                    {product.title}
                  </h2>
                  <h3 className="text-red-600 font-medium">
                    {formatter.format(product.price)}
                  </h3>
                </div>
              </Link>
            ) : (
              <p>Dados do produto inválidos.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
