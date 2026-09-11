import * as z from "zod";

export const OrderItem = z.object({
  productId: z.string(),
  quantity: z.number().int().positive(),
});

export type OrderItem = z.infer<typeof OrderItem>;