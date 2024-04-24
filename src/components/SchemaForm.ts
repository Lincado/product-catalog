import { z } from "zod";
import { ProductDetails } from "../data/ProductData";

export const schema = z.object({
  amount: z.coerce.number().min(1, "Quantidade minima é 1"),
});

export type QuantityAmount = z.infer<typeof schema>;

export interface Product {
  product: ProductDetails;
}
