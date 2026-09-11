import * as z from "zod";
import { Category } from "../category.schema";

export const Product = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: Category,
});

export type Product = z.infer<typeof Product>;