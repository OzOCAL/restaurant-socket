import * as z from "zod";
import { Category } from "../category.schema";

export const CreateProduct = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  category: Category,
});

export type CreateProduct = z.infer<typeof CreateProduct>;