import { useParams } from "react-router-dom";
import { productsData, isProduct } from "../../data/ProductData";
import { ProductDetails } from "../../data/ProductData";
import ButtonAddToCart from "../../components/ButtonAddToCart";
export default function Product() {
  const { id } = useParams<string>();

  if (id === undefined) {
    return null;
  }

  if (Array.isArray(productsData) && productsData.length === 0) {
    return null;
  }

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const product: ProductDetails[] = productsData.filter(
    (product) => product.id === parseInt(id),
  );

  return (
    <>
      <div className="container max-w-4xl mx-auto my-44 rounded-lg border border-gray-200 p-8">
        {product.map((product, idx) =>
          isProduct(product) ? (
            <div key={idx} className="flex justify-between">
              <div className="w-96">
                <img src={product.photo} alt={product.title} />
              </div>
              <div className="flex flex-col justify-between items-start border border-gray-200 p-3 rounded-lg">
                <h2 className="font-bold first-letter:uppercase text-[20px] font-sans">
                  {product.title}
                </h2>
                <p className="w-80 text-[17px] text-gray-800 font-sans">
                  {product.description}
                </p>
                <h3 className="text-15px font-semibold text-red-500 font-sans">
                  {formatter.format(product.price)}
                </h3>
                <ButtonAddToCart />
              </div>
            </div>
          ) : (
            <p key={idx}>Erro inesperado</p>
          ),
        )}
      </div>
    </>
  );
}
