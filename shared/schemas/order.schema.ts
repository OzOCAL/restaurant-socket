import * as z from "zod";
import { OrderItem } from "./order-item.schema";

const Order = z.object({
    waiterId: z.string(),
    table: z.number().int().positive(),
    totalPrice: z.number().positive(),
    items: z.array(OrderItem).min(1),
});

export type Order = z.infer<typeof Order>;
